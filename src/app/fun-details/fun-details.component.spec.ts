import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunDetailsComponent } from './fun-details.component';

describe('FunDetailsComponent', () => {
  let component: FunDetailsComponent;
  let fixture: ComponentFixture<FunDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
