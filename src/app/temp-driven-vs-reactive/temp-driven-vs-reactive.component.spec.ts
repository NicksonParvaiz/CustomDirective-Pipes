import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDrivenVsReactiveComponent } from './temp-driven-vs-reactive.component';

describe('TempDrivenVsReactiveComponent', () => {
  let component: TempDrivenVsReactiveComponent;
  let fixture: ComponentFixture<TempDrivenVsReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempDrivenVsReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempDrivenVsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
