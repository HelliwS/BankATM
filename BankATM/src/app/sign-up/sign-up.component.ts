import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatCardModule ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  formData: FormGroup;
  
  constructor(private router: Router) {
      this.formData = new FormGroup({
        name: new FormControl(''),
        email: new FormControl('')
      });
      
    }


    backPage() {
      this.router.navigate(['']);
    }

    onSubmitSignUp() {
      return;
    }
  
}
