import {HttpClient} from 'aurelia-http-client';
import {PlanningSession} from '../dto/planning-session'

export class SessionManagementService {
    static newSession(planningSession:PlanningSession){
        var http = new HttpClient();
        http.post('http://localhost:1176/api/values/start', planningSession).then(data => {
            let planningSession: PlanningSession = JSON.parse(data.response);
            alert("Session erstellt: " + planningSession.id);
        });
    }

    static getSession(id:number){
        var http = new HttpClient();
        http.get('http://localhost:1176/api/values/' + id).then(data => {
            let planningSession: PlanningSession = JSON.parse(data.response);
            alert(planningSession.sessionDescription);
        });
    }
}