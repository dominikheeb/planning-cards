import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Planning Cards';
    config.map([
      { route: ['', 'start'], name: 'start',      moduleId: 'modules/start',      nav: true, title: 'Start' }
    ]);

    this.router = router;
  }
}
