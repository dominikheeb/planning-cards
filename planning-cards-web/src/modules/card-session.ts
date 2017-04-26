import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";
import {PlanningSession} from "../dto/planning-session";
import {SessionManagementService} from "../services/sessionManagementService";

@inject(SessionManagementService)
export class CardSession {
    sessionManagementService: SessionManagementService;
    planningSession: PlanningSession | null;

    constructor(sessionManagementService: SessionManagementService){
        this.sessionManagementService = sessionManagementService;
    }
activate(params
    ){
        this.sessionManagementService.getSession(params.id).then((planningSession) => {
            this.planningSession = planningSession;
            this.sessionManagementService.joinSession(planningSession.id);
        });
    }
}
