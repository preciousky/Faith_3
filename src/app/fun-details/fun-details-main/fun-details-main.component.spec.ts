import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunDetailsMainComponent } from './fun-details-main.component';

describe('FunDetailsMainComponent', () => {
  let component: FunDetailsMainComponent;
  let fixture: ComponentFixture<FunDetailsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunDetailsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunDetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
