import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'selector-name',
    template: `
    <h1> Create a brand new contact comment / Event!</h1>
    <hr>
    <div class="col-md-6">
      <h3> [Create Event Form Goes He - er.] </h3>
      <br/>
      <br/>
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>  
    `
})

export class CreateEventComponent implements OnInit {

    isDirty:Boolean = true

    constructor(private router: Router) { }

    cancel() {
        this.router.navigate(['/events'])
    }
    ngOnInit() { }
}