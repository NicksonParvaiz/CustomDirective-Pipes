import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-temp-driven-vs-reactive',
  templateUrl: './temp-driven-vs-reactive.component.html',
  styleUrls: ['./temp-driven-vs-reactive.component.css'],
})
export class TempDrivenVsReactiveComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor(private fb: FormBuilder) {}
  myForm: FormGroup;
  ngOnInit(): void {
    console.log('ngOnInit Called');

    this.myForm = this.fb.group({
      name: [''],
    });
  }

  ngOnChanges(): void {
    console.log('ngOnChanges called');
  }

  ngDoCheck(): void {
    // console.log('Value ---- > ', this.myForm.controls.name.value);
    console.log('Name --------->', this.name);
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngAfterViewChecked called');
  }

  abc() {
    this.myForm.controls.name.setValue('987654321');
  }

  // -------------- Template Driven --------------
  name: string;
}
