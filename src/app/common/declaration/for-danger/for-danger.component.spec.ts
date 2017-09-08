import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDangerComponent } from './for-danger.component';

describe('ForDangerComponent', () => {
  let component: ForDangerComponent;
  let fixture: ComponentFixture<ForDangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForDangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
