import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  registrationForm: FormGroup;
  ngOnInit(): void {
    this.creatingForm();
  }

  creatingForm() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required],
      address: [''],
      gender: [''],
      maritalStatus: ['', Validators.required],
      spouseName: [''],
      NoOfChildrens: ['', Validators.max(4)],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  checkMaritalStatus() {
    let status = this.registrationForm.controls.maritalStatus.value;
    console.log('status', status);
    if (status == 1) {
      this.registrationForm.controls.spouseName.setValidators(null);
      this.registrationForm.controls.spouseName.disable();
    } else {
      this.registrationForm.controls.spouseName.setValidators(
        Validators.required
      );
      this.registrationForm.controls.spouseName.enable();
    }
    this.registrationForm.controls.spouseName.updateValueAndValidity();
  }

  onSubmit() {
    console.log('Form Data', this.registrationForm);
    if (this.registrationForm.valid) {
      alert('Save');
    }
  }
}
