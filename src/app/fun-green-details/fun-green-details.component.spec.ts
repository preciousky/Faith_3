import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunGreenDetailsComponent } from './fun-green-details.component';

describe('FunGreenDetailsComponent', () => {
  let component: FunGreenDetailsComponent;
  let fixture: ComponentFixture<FunGreenDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunGreenDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunGreenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
