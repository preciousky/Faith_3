import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunGreenComponent } from './fun-green.component';

describe('FunGreenComponent', () => {
  let component: FunGreenComponent;
  let fixture: ComponentFixture<FunGreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunGreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
