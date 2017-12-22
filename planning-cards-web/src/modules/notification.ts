import {Guid} from 'guid';

export class Notification {
    notification_id:Guid;

    constructor(message:string){
        // Use dynamic compose!!! => https://ilikekillnerds.com/2015/10/aurelia-dynamic-composition/
        this.notification_id = Guid.create();    
    }
}
