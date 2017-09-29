import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { ISession } from '../index';

@Component({
    templateUrl: '/app/events/event-details/create-session.component.html',
})
export class CreateSessionComponent implements OnInit {

    newSessionForm: FormGroup

    name: FormControl
    duration: FormControl
    presenter: FormControl 
    level: FormControl
    abstract: FormControl
    
    constructor() { }
    
    ngOnInit() {
        this.name = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', Validators.required)
        this.name = new FormControl('',   ) 
        
        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            abstract: this.abstract
        })

    }

    saveSession(formValues) {
        let session: ISession = {
            id:undefined,
            name:formValues.name,
            duration:formValues.duration,
            level:formValues.level,
            presenter:formValues.presenter,
            abstract:formValues.abstract,
            voters: []
        }
    }
}