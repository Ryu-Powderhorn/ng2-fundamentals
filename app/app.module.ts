import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/event-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { Router, RouterModule } from "@angular/router";

// Common Services
import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";
import { EventDetailsComponent } from "./events/event-details/event-details.component";

// Routing
import { appRoutes } from "./routes";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";



@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent, 
        EventsListComponent, 
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent, 
        NavBarComponent,
        Error404Component,
    ],
    providers: [EventService,
         ToastrService,
         EventRouteActivator,
         // RouteGuard Function
         { 
            provide: 'canDeactivateCreateEvent', 
            useValue: checkDirtyState 
        }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(comp: CreateEventComponent) {
    if (comp.isDirty)
        return window.confirm('You didn\'t actually save that. You sure, hon?')
    return true
}