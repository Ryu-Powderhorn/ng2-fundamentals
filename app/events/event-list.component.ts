import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
      <h1> Upcoming ng x events ! ! ! </h1>
      <hr />
      <event-thumbnail #thumbnail
      [event]="event1"></event-thumbnail>
      <h3>{{thumbnail.testTemplateProperty}}</h3>
      <button class="btn btn-primary" (click)="thumbnail.logTemplateDemo()">Log that template data, Jethroe!</button>
    </div>
    `
      //@output module2-demo
      //(childButtonClickHandler)="handleEventFromClicker($event)" 
})

export class EventsListComponent  {
    constructor() { }

    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: 'app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    // @output module2-ddemo
    // handleEventFromClicker(event_data_from_child) {
    //     console.log('Clicked an event handler! It said: ', event_data_from_child)
    // }
}