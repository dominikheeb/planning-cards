import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) : void {
    this.router = router;
    config.title = 'Planning Cards';
    config.map([
      { route: ['', 'sessionOverview'], name: 'sessionOverview',  moduleId: 'modules/session-overview', nav:true, title: 'Übersicht' }
    ]);
  }
}
