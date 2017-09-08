import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunDetailsFeeComponent } from './fun-details-fee.component';

describe('FunDetailsFeeComponent', () => {
  let component: FunDetailsFeeComponent;
  let fixture: ComponentFixture<FunDetailsFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunDetailsFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunDetailsFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
