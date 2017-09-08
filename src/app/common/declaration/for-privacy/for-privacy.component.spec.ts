import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPrivacyComponent } from './for-privacy.component';

describe('ForPrivacyComponent', () => {
  let component: ForPrivacyComponent;
  let fixture: ComponentFixture<ForPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
