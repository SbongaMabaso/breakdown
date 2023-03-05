using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace breakedownApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BreakdownController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public BreakdownController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        #region Breakdown
        [HttpGet]
        public async Task<ActionResult<List<Breakdown>>> GetAllBreakdowns()
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            IEnumerable<Breakdown> breakdowns = await SelectAllBreakdowns(connection);
            return Ok(breakdowns);
        }

        [HttpGet("{BreakdownId:int}")]
        public async Task<ActionResult<List<Breakdown>>> GetBreakdowns(int BreakdownId)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var breakdown = await connection.QueryFirstAsync<Breakdown>("select * from breakdowns where id = @Id",
                new { Id = BreakdownId});
            return Ok(breakdown);
        }

        [HttpPost]
        public async Task<ActionResult<List<Breakdown>>> CreateBreakdown(Breakdown breakdown)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("insert into breakdowns (ref, name, driver, reg, date) values (@ref, @name, @driver, @reg, @date)", breakdown);
            return Ok(await SelectAllBreakdowns(connection));
        }

        [HttpPut]
        public async Task<ActionResult<List<Breakdown>>> UpdateBreakdown(Breakdown breakdown)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("update breakdowns set ref=@ref, name=@name, driver=@driver, reg=@reg, date=@date where id = @Id", breakdown);
            return Ok(await SelectAllBreakdowns(connection));
        }

        [HttpDelete("{BreakdownId:int}")]
        public async Task<ActionResult<List<Breakdown>>> DeleteBreakdown(int BreakdownId)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("delete from breakdowns where id = @Id", new {Id = BreakdownId});
            return Ok(await SelectAllBreakdowns(connection));
        }
        #endregion

        #region Drivers
        [HttpPost]
        public async Task<ActionResult<List<Driver>>> AddDriver(Driver driver)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("INSERT INTO drivers (drivername, companyname, registrationNumber, password, repeatPassword) VALUES (@drivername, @companyname, @registrationNumber, @password, @repeatPassword)", driver);
            return Ok(await SelectAllDrivers(connection));
        }

        [HttpGet("{DriverId:int}")]
        public async Task<ActionResult<List<Driver>>> GetDriver(int DriverId)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var driver = await connection.QueryFirstAsync<Driver>("select * from drivers where DriverId = @Id", new { Id = DriverId });
            return Ok(driver);
        }

        [HttpPut]
        public async Task<ActionResult<List<Driver>>> UpdateDriver(Driver driver)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("UPDATE drivers SET drivername=@drivername, companyname=@companyname, registrationNumber=@registrationNumber where DriverId = @DriverId", driver);
            return Ok(await SelectAllDrivers(connection));
        }

        [HttpDelete("{DriverId:int}")]
        public async Task<ActionResult<List<Driver>>> DeleteDriver(int DriverId)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("delete from drivers where DriverId = @Id", new { Id = DriverId });
            return Ok(await SelectAllDrivers(connection));
        }
        #endregion

        [NonAction]
        private static async Task<IEnumerable<Breakdown>> SelectAllBreakdowns(SqlConnection connection)
        {
            return await connection.QueryAsync<Breakdown>("select * from breakdowns");
        }

        [NonAction]
        private static async Task<IEnumerable<Driver>> SelectAllDrivers(SqlConnection connection)
        {
            return await connection.QueryAsync<Driver>("select * from drivers");
        }
    }
}
