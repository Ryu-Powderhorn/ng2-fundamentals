import { Component, OnInit } from '@angular/core';
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    styles:[ ``],
    template: `
    <div>
      <h1> Upcoming ng x events ! ! ! </h1>
      <hr />
      <div *ngFor="let event of events">
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
    `
})

export class EventsListComponent  implements OnInit{ 
    
    events:any
    
    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) { 

    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName) {
        // @TODO: fix failling toast - (wrapping external libraries as services)
        // this.toastr.error(eventName);
        console.log(eventName);

    }

}