import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectiveExampleComponent } from './custom-directive-example.component';

describe('CustomDirectiveExampleComponent', () => {
  let component: CustomDirectiveExampleComponent;
  let fixture: ComponentFixture<CustomDirectiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectiveExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
