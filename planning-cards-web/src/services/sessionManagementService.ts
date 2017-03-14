import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {PlanningSession} from '../dto/planning-session'

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
        let data = await this.http.post('/values/start', planningSession);
        let newSession:PlanningSession = JSON.parse(data.response);
        return newSession;
    }

    async getSession(id:number){
        let data = await this.http.get('/values/' + id);
        let planningSession: PlanningSession = JSON.parse(data.response);
        return planningSession;
    }
}