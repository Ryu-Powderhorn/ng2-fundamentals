import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/event-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";

export const appRoutes:Routes = [

    // view all
    { path: 'events', component: EventsListComponent},
    // view one detail by path param
    { path: 'events/:id', component: EventDetailsComponent},
    // (prefix and full are the options here - prefix is a %like for the beginning of a path)
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    

]