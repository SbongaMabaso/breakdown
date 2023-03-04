using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
    }
}
