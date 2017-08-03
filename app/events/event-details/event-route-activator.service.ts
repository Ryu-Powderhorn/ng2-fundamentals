import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { EventService } from "../shared/event.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class EventRouteActivaor implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const eventExists  = !!this.eventService.getEvent(route.params['id'])


        if (!eventExists)
            this.router.navigate(['/404'])
        return eventExists;
    }

    constructor(private eventService: EventService, private router: Router) {

     }

}