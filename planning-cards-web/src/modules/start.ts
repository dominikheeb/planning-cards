import {HttpClient} from 'aurelia-http-client';
import {PlanningSession} from '../dto/planning-session'

export class Start {
    heading: string;
    planningSessions: PlanningSession[];
    constructor(){
        this.heading = "Willkommen auf PlanningCards.ch";
        this.planningSessions = [];
    }

    newSession(){
        var http = new HttpClient();
        var planningSession = new PlanningSession();
        planningSession.sessionDescription = "NewSession";
        http.post('http://localhost:1176/api/values/start', planningSession).then(data => {
            let planningSession: PlanningSession = JSON.parse(data.response);
            alert("Session erstellt: " + planningSession.id);
        });
    }

    getSessions() {
        var http = new HttpClient();
        http.get('http://localhost:1176/api/values').then(data => {
            this.planningSessions = JSON.parse(data.response);
        });
    }

    resetSessions(){
        this.planningSessions = [];
    }
}