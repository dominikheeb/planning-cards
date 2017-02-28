import {HttpClient} from 'aurelia-http-client';
import {PlanningSession} from '../dto/planning-session'

export class Start {
    heading: string;
    planningSessions: PlanningSession[];
    socket: WebSocket;
    constructor(){
        this.heading = "Willkommen auf PlanningCards.ch";
        this.planningSessions = [];
        this.socket = new WebSocket("ws://localhost:1176/ws");
    }

    activate(){
        this.socket.onmessage = function (messageEvent){
            alert("Message from Server: " + messageEvent.data);
        };
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

    sendSocket(){
        this.socket.send("Test");
    }
}