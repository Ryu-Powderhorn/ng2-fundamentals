import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EventService } from "./shared/event.service";
import 'rxjs/add/operator/map'

@Injectable()
export class EventListResolver implements Resolve<any> {
    
    resolve() {

        return this.eventService.getAllEvents().map(events => events)
    }

    constructor(private eventService: EventService) { }
}