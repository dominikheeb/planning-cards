import {Aurelia} from "aurelia-framework";
import {Router, RouterConfiguration} from "aurelia-router";

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) : void {
    this.router = router;
    config.title = "Planning Cards";
    config.map([
      { route: ["", "sessionOverview"], name: "sessionOverview",  moduleId: "modules/session-overview", nav: true, title: "Übersicht" },
      { route: ["session/:id", "cardSession"], name: "cardSession",  moduleId: "modules/card-session", nav: false, title: "Planning Card Session" },
    ]);
  }
}
