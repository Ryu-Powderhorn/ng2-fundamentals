import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="hoverwell well thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div>
    `
        // @output module2-demo
        // <button class="btn btn-primary" (click)="clickHandler()">Click Here!</button>
})

export class EventThumbnailComponent implements OnInit {
    constructor() { }

    @Input() event:any;
    
    testTemplateProperty:any = "template variable demo value"

    // @output Annotation module2-ddemo
    // @Output() childButtonClickHandler = new EventEmitter();

    // clickHandler() {
    //     // log some dynamic info
    //     this.childButtonClickHandler.emit(this.event.name);
    // };

    

    // templateVariableLession-demo
    logTemplateDemo() {
        console.log(this.event.name)
    };

    ngOnInit() {  }

}
