import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunDetailsGeneralComponent } from './fun-details-general.component';

describe('FunDetailsGeneralComponent', () => {
  let component: FunDetailsGeneralComponent;
  let fixture: ComponentFixture<FunDetailsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunDetailsGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunDetailsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
