using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace planning_cards_api.Hubs
{
    public class SessionHub:Hub<ISessionHub>
    {
        public override Task OnConnected()
        {
            // Set connection id for just connected client only
            return Clients.Client(Context.ConnectionId).SetConnectionId(Context.ConnectionId);
        }

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
