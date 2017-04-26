﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dataaccess.interfaces.Sessions;
using dataaccess.Sessions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using planning_cards_api.Sessions;

namespace planning_cards_api.Controllers
{
    [Route("api/[controller]")]
    public class SessionsController : Controller
    {
        private readonly ISessionRepository _sessionRepository;

        public SessionsController(ISessionRepository sessionRepository)
        {
            _sessionRepository = sessionRepository;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<SessionDto> Get()
        {
            var sessionDtos = new List<SessionDto>();
            var sessions = _sessionRepository.GetPlanningSessions();
            foreach (var planningSession in sessions)
            {
                sessionDtos.Add(new SessionDto {Id = planningSession.Id, SessionDescription = planningSession.SessionDescription});
            }

            return sessionDtos;
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetSession(long id)
        {
            var session = _sessionRepository.GetPlanningSession(id);
            if (session == null)
            {
                return NotFound();
            }
            return Ok(new SessionDto { Id = session.Id, SessionDescription = session.SessionDescription });
        }

        [Route("start")]
        [HttpPost]
        public SessionDto StartSession([FromBody]SessionDto sessionDto)
        {
            var session = _sessionRepository.StartSession(sessionDto.SessionDescription);
            return new SessionDto {Id = session.Id, SessionDescription = session.SessionDescription};
        }
    }
}
