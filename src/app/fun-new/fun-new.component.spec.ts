import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunNewComponent } from './fun-new.component';

describe('FunNewComponent', () => {
  let component: FunNewComponent;
  let fixture: ComponentFixture<FunNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
