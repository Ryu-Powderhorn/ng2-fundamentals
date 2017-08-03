import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/event-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";

export const appRoutes:Routes = [

    // view all
    { path: 'events', component: EventsListComponent},
    // create new event
    { path: 'events/new', component: CreateEventComponent},
    
    
    // view one detail by path param - @TODO: figure out how to mark comments as important and also this is important -
    // ':id' style route-param routes should be last in your routing file so Angular doesn't jump on the first match it sees (new) and
    // move on
    { path: 'events/:id', component: EventDetailsComponent},
    
    // Errors and defaults

    { path: '404', component: Error404Component},
    

    // (prefix and full are the options here - prefix is a %like for the beginning of a path)
    { path: '', redirectTo: '/events', pathMatch: 'full'},
       

]
