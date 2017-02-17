using System.Collections.Generic;

namespace dataaccess.Sessions
{
    public interface ISessionManager
    {
        PlanningSession StartSession(string sessionDescription);
        IEnumerable<PlanningSession> GetPlanningSessions();
    }
}