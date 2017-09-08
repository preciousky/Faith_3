import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FscardComponent } from './fscard.component';

describe('FscardComponent', () => {
  let component: FscardComponent;
  let fixture: ComponentFixture<FscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
