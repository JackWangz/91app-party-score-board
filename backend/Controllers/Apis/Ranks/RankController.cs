using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Apis.Ranks
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class RankController : ControllerBase
    {
        public RankController()
        {
        }

        public JsonResult GetRank()
        {
            return new JsonResult(JsonSerializer.Serialize(new { a = 123, b = "Jack"}));
        }
    }
}