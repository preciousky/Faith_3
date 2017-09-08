import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForOurTeamComponent } from './for-our-team.component';

describe('ForOurTeamComponent', () => {
  let component: ForOurTeamComponent;
  let fixture: ComponentFixture<ForOurTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForOurTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
