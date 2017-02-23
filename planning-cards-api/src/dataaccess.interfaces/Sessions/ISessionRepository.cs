using System.Collections.Generic;
using planning_cards_api.models.Sessions;

namespace dataaccess.interfaces.Sessions
{
    public interface ISessionRepository
    {
        PlanningSession StartSession(string sessionDescription);
        IEnumerable<PlanningSession> GetPlanningSessions();
    }
}