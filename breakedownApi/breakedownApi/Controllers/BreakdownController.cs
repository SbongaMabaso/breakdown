using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace breakedownApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BreakdownController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public BreakdownController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<ActionResult<List<Breakdown>>> GetAllBreakdowns()
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            IEnumerable<Breakdown> breakdowns = await SelectAllBreakdowns(connection);
            return Ok(breakdowns);
        }

        [HttpGet("{BreakdownId}")]
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

        [HttpDelete("{BreakdownId}")]
        public async Task<ActionResult<List<Breakdown>>> DeleteBreakdown(int BreakdownId)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("delete from breakdowns where id = @Id", new {Id = BreakdownId});
            return Ok(await SelectAllBreakdowns(connection));
        }

        private static async Task<IEnumerable<Breakdown>> SelectAllBreakdowns(SqlConnection connection)
        {
            return await connection.QueryAsync<Breakdown>("select * from breakdowns");
        }
    }
}
