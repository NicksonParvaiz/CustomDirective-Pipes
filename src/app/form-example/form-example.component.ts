import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css'],
})
export class FormExampleComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  myForm: FormGroup;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
    });

    // this.myForm = new FormGroup({
    //   firstName : new FormControl(),
    //   lastName : new FormControl(),
    // })
  }
  // submit(firstName, lastName) {
  //   console.log('firstName', firstName.value);
  //   console.log('lastName', lastName.value);
  //   console.log('chl raha hai');
  // }

  addValue() {
    this.myForm.controls['firstName'].setValue(13456789);
  }
  submit() {
    console.log('myForm', this.myForm);

    if (this.myForm.valid) {
      let data: Registraion = {
        firstName: this.myForm.controls.firstName.value,
        lastName: this.myForm.controls.lastName.value,
        createdBy: 'Nick',
        createdDate: new Date(),
      };
      console.log(data);
    }
  }
}

interface Registraion {
  firstName: string;
  lastName: string;
  createdBy: string;
  createdDate: Date;
}
