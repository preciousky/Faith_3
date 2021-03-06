import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostInfoComponent } from './host-info.component';

describe('HostInfoComponent', () => {
  let component: HostInfoComponent;
  let fixture: ComponentFixture<HostInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
