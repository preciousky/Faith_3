import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunDetailsFormsComponent } from './fun-details-forms.component';

describe('FunDetailsFormsComponent', () => {
  let component: FunDetailsFormsComponent;
  let fixture: ComponentFixture<FunDetailsFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunDetailsFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunDetailsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
