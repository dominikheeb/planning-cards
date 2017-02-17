using System.Collections.Generic;
using System.Linq;
using Raven.Client;
using Raven.Client.Document;

namespace dataaccess.Sessions
{
    public class SessionManager : ISessionManager
    {
        public PlanningSession StartSession(string sessionDescription)
        {
            using (IDocumentStore store = new DocumentStore
            {
                Url = "http://localhost:8080/", // server URL
                DefaultDatabase = "planning-cards-db" // default database
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
                Url = "http://localhost:8080/", // server URL
                DefaultDatabase = "planning-cards-db" // default database
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
