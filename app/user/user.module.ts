import { NgModule } from '@angular/core';
import { userRoutes } from "./user.routes";
import { ProfileComponent } from './profile.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    exports: [],
    declarations: [ProfileComponent],
    providers: [],
})
export class UserModule { }
