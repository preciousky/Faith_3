import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcardComponent } from './fcard.component';

describe('FcardComponent', () => {
  let component: FcardComponent;
  let fixture: ComponentFixture<FcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
