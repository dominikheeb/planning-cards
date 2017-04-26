using System.Threading.Tasks;
using planning_cards_api.models.Estimation;

namespace planning_cards_api.Hubs
{
    public interface ISessionHub
    {
        Task ShowEstimation(Estimation estimation);
        Task SetConnectionId(string contextConnectionId);
    }
}