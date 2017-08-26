import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { EventService } from "./shared/event.service";

@Component({
    templateUrl: 'app/events/create-event.component.html',
    styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {background-color:#999;}
    .error ::-moz-placeholder {background-color:#999;}
    .error :-moz-placeholder {background-color:#999;}
    .error :ms-input-placeholder {background-color:#999;}
  `]
})
export class CreateEventComponent implements OnInit {

    isDirty:Boolean = true

    constructor(private router: Router, private events : EventService) {
        
     }

    ngOnInit() { }
    
    cancel() {
        this.router.navigate(['/events'])
    }
    
    saveEvent(formValues) {
         
        this.events.saveEvent(formValues)   
        this.isDirty = false;
        this.router.navigate(['/events'])
     }
    }   