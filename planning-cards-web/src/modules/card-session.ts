import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {PlanningSession} from '../dto/planning-session';
import {SessionManagementService} from '../services/sessionManagementService';

@inject(SessionManagementService)
export class CardSession {
    sessionManagementService:SessionManagementService;
    planningSession:PlanningSession | null;

    constructor(sessionManagementService:SessionManagementService){
        this.sessionManagementService = sessionManagementService;
        this.planningSession = null;
    }

    activate(params){
        this.sessionManagementService.getSession(params.id).then(planningSession => {
            this.planningSession = planningSession;
        });
    }
}