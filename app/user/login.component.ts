import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'app/user/login.component.html'
})

export class LoginComponent implements OnInit {
    constructor(private router: Router, private authservice: AuthService) { }

    ngOnInit() { }

    login(formValues) {
        this.authservice.loginUser(formValues.username, formValues.password)
        this.router.navigate(['events'])

    }

    cancel() {

        this.router.navigate(['events'])
    }
} 