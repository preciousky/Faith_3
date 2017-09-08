import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FnewComponent } from './fnew.component';

describe('FnewComponent', () => {
  let component: FnewComponent;
  let fixture: ComponentFixture<FnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
