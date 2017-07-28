import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    styles: [`
    .pad-left { margin-left: 10px ;}
    .well div { color: red;}
    `],
    template: `
    <div class="hoverwell well thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
           
            <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div>
    `
})

export class EventThumbnailComponent implements OnInit {
    constructor() { }

    @Input() event:any;
    


    ngOnInit() {  }

}
