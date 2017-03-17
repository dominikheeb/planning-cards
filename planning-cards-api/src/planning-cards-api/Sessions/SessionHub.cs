using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace planning_cards_api.Sessions
{
    public class SessionHub:Hub
    {
        public Task JoinSession(long sessionId)
        {
            return Groups.Add(Context.ConnectionId, sessionId.ToString());
        }

        public Task LeaveSession(long sessionId)
        {
            return Groups.Remove(Context.ConnectionId, sessionId.ToString());
        }
    }
}
