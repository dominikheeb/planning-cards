import {inject} from 'aurelia-framework';
import {PlanningSession} from '../dto/planning-session';
import {SessionManagementService} from '../services/sessionManagementService';
import {Router} from 'aurelia-router';

@inject(SessionManagementService, Router)
export class SessionOverview {
    sessionManagementService:SessionManagementService;
    router:Router;
    newSessionForm:PlanningSession;
    joinSessionForm:PlanningSession;
    constructor(sessionManagementService:SessionManagementService, router:Router){
        this.router = router;
        this.sessionManagementService = sessionManagementService;
        this.newSessionForm = new PlanningSession();
        this.joinSessionForm = new PlanningSession();
    }

    onStartSessionSubmit(){
        if(this.newSessionForm.sessionDescription && this.newSessionForm.sessionDescription !==""){
            this.sessionManagementService.newSession(this.newSessionForm).then((newSession:PlanningSession) => {
                if(newSession !== null){
                    this.router.navigate("/session/" + newSession.id);
                }
                else{
                    alert("Session failed");
                }
            });
        }
    }

    onJoinSessionSubmit() {
        if(this.joinSessionForm.id){
            this.sessionManagementService.getSession(this.joinSessionForm.id).then((session:PlanningSession) => {
                if(session !== null){
                    this.router.navigate("/session/" + this.joinSessionForm.id);
                }
                else{
                    alert("session null");
                }
            });
            
        }
    }
}