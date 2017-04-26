import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {PlanningSession} from '../dto/planning-session';

@inject(HttpClient)
export class SessionManagementService {
    http:HttpClient;
    constructor(http:HttpClient){
        http.configure(config => {
            config.withBaseUrl('http://localhost:1176/api/');
        });
 
        this.http = http;
    }
    
    async newSession(planningSession:PlanningSession){
        let data = await this.http.post('/sessions/start', planningSession);
        let newSession:PlanningSession = JSON.parse(data.response);
        return newSession;
    }

    async getSession(id:number){
        let data = await this.http.get('/sessions/' + id);
        let planningSession: PlanningSession = JSON.parse(data.response);
        return planningSession;
    }

    // , sessionCallback:(method:string, params:any) => void
    async joinSession(id:number){
        var connection = $.hubConnection("http://localhost:1176");
        var sessionHubProxy = connection.createHubProxy('sessionHub');
        sessionHubProxy.on("setConnectionId", function(msg:string){
            alert(msg);
        });
        connection.start().done(() => {
            sessionHubProxy.invoke("joinSession", id);
        }).fail(msg => alert("connection failed: " + msg));
    }
}