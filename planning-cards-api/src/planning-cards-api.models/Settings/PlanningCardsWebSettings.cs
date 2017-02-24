using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace planning_cards_api.models.Settings
{
    public class PlanningCardsWebSettings
    {
        public string RavenDbUrl { get; set; }

        public string RavenDbName { get; set; }
    }
}
