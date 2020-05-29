import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberBackgrondComponent } from './barber-backgrond.component';

describe('BarberBackgrondComponent', () => {
  let component: BarberBackgrondComponent;
  let fixture: ComponentFixture<BarberBackgrondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarberBackgrondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberBackgrondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
