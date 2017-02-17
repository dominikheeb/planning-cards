using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dataaccess.Sessions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using planning_cards_api.Sessions;

namespace planning_cards_api.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private SessionManager _sessionManager = new SessionManager();
        // GET api/values
        [HttpGet]
        public IEnumerable<SessionDto> Get()
        {
            var sessionDtos = new List<SessionDto>();
            var sessions = _sessionManager.GetPlanningSessions();
            foreach (var planningSession in sessions)
            {
                sessionDtos.Add(new SessionDto {Id = planningSession.Id, SessionDescription = planningSession.SessionDescription});
            }

            return sessionDtos;
        }

        [Route("start")]
        [HttpPost]
        public SessionDto StartSession([FromBody]string description)
        {
            var session = _sessionManager.StartSession(description);
            return new SessionDto {Id = session.Id, SessionDescription = session.SessionDescription};
        }
    }
}
