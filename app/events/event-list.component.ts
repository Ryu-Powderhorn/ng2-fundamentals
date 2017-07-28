import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'events-list',
    styles:[``],
    template: `
    <div>
      <h1> Upcoming ng x events ! ! ! </h1>
      <hr />
      <div class="well"><div>CSS ENCAPSULATED - TEXT NOT RED! <br/>
      (though it matches the child component's css selector)<br/>
      Move the 'styles' element to this component metadata to affect only this componenet's text in .well classe's!
      </div>
      </div>
      <event-thumbnail
      [event]="event1"></event-thumbnail>
    </div>
    `
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

}