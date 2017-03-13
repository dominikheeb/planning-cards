import {HttpClient} from 'aurelia-http-client';
import {PlanningSession} from '../dto/planning-session';
import {SessionManagementService} from '../services/sessionManagementService';

export class SessionOverview {
    newSessionForm:PlanningSession;
    joinSessionForm:PlanningSession;
    constructor(){
        this.newSessionForm = new PlanningSession();
        this.joinSessionForm = new PlanningSession();
    }

    onStartSessionSubmit(){
        if(this.newSessionForm.sessionDescription && this.newSessionForm.sessionDescription !==""){
            SessionManagementService.newSession(this.newSessionForm);
        }
    }

    onJoinSessionSubmit() {
        if(this.joinSessionForm.id){
            alert("ID: " + this.joinSessionForm.id);
        }
    }
}