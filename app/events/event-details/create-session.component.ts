import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
    templateUrl: '/app/events/event-details/create-session.component.html',
})
export class CreateSessionComponent implements OnInit {

    name
    duration
    level
    abstract
    
    constructor() { }

    ngOnInit() {
        this.name = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', Validators.required)
        this.name = new FormControl('', Validators.required, Validators.maxLength(400)) }
}