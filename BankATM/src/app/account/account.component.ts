import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-account',
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    templateUrl: './account.component.html',
    styleUrl: './account.component.scss'
})
export class AccountComponent {

PIN?: number;
form: FormGroup;
inputInvalid = false;

constructor(
  private router: Router,
  private pinValidator: FormBuilder
) {
  this.form = this.pinValidator.group({
    PIN: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(/^[0-9]*$/)]]
  });

}

  backPage() {
    this.router.navigate(['']);
  }

  submitPin(){
    if (this.form.valid){

    } else {
      console.error('Input must be valid 4-digit number');
    }
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if(inputElement.value.length > 4 || /[^0-9]/.test(inputElement.value)){
      inputElement.value = inputElement.value.slice(0, 4);
      inputElement.value = inputElement.value.replace(/[^0-9]/g, '');
      this.inputInvalid = true;

      setTimeout(() => {
        this.inputInvalid = false;
      }, 500);

    } else {
      this.inputInvalid = false;
    }
  }
}
