import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from "@angular/forms";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: 'app/user/profile.component.html',
  // @TODO: fix odd highlight color error for text
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {background-color:#999;}
    .error ::-moz-placeholder {background-color:#999;}
    .error :-moz-placeholder {background-color:#999;}
    .error :ms-input-placeholder {background-color:#999;}
  `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup 
  private firstName: FormControl 
  private lastName: FormControl
  
  constructor(private router: Router, private auth: AuthService) {
    
  }

  ngOnInit() {
    // defining validators in reactive forms
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required)
    
    this.profileForm = new FormGroup({
      firstName: this. firstName,
      lastName: this. lastName
    })

  }

  cancel() {
    this.router.navigate(['events'])
  }
  
  saveProfile(formValues){
    if(this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events'])
    }
  }

  
  validateFirstName() {
    return this.validateName(this.firstName)
    
  }

  validateLastName() {
    return this.validateName(this.lastName)
  }






  
  validateName(name) {
    return name.valid ||
    name.untouched
  }
  
}