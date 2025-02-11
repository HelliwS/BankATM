import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-landing-page',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  
  formData: FormGroup;
  cardIsEntered: boolean = false;

  constructor(private router: Router) {
    this.formData = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('')
    });
    
  }

  onSubmitSignUp() {
    console.log(this.formData.value);
  }

  cardEnteredBtn() {
    this.cardIsEntered = true;
    this.router.navigate(['/Account'])
  }

  signUpBtn() {
    this.router.navigate(['/SignUp'])
  }


}
