import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunToolComponent } from './fun-tool.component';

describe('FunToolComponent', () => {
  let component: FunToolComponent;
  let fixture: ComponentFixture<FunToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
