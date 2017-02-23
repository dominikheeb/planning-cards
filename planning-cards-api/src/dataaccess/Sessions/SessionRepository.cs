using System.Collections.Generic;
using System.Linq;
using dataaccess.interfaces.Sessions;
using Microsoft.Extensions.Options;
using planning_cards_api.models.Sessions;
using planning_cards_api.models.Settings;
using Raven.Abstractions.Data;
using Raven.Client;
using Raven.Client.Document;

namespace dataaccess.Sessions
{
    public class SessionRepository : ISessionRepository
    {
        private readonly PlanningCardsWebSettings _planningCardsWebSettings;

        public SessionRepository(IOptions<PlanningCardsWebSettings> planningCardsWebSettings)
        {
            _planningCardsWebSettings = planningCardsWebSettings.Value;
        }

        public PlanningSession StartSession(string sessionDescription)
        {
            using (IDocumentStore store = new DocumentStore
            {
                Url = _planningCardsWebSettings.RavenDbUrl, // server URL
                DefaultDatabase = _planningCardsWebSettings.RavenDbName // default database
            })
            {
                store.Initialize();
                using (IDocumentSession documentSession = store.OpenSession()) // opens a session that will work in context of 'DefaultDatabase'
                {
                    PlanningSession planningSession = new PlanningSession()
                    {
                        SessionDescription = sessionDescription
                    };

                    documentSession.Store(planningSession); // stores employee in planningSession, assigning it to a collection `Employees`

                    documentSession.SaveChanges();

                    return planningSession;
                }
            }
        }

        public IEnumerable<PlanningSession> GetPlanningSessions()
        {
            using (IDocumentStore store = new DocumentStore
            {
                Url = _planningCardsWebSettings.RavenDbUrl, // server URL
                DefaultDatabase = _planningCardsWebSettings.RavenDbName // default database
            })
            {
                store.Initialize();
                using (IDocumentSession documentSession = store.OpenSession()) // opens a session that will work in context of 'DefaultDatabase'
                {
                    return documentSession.Query<PlanningSession>().ToList();
                }
            }
        }
    }
}
