import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunEssayComponent } from './fun-essay.component';

describe('FunEssayComponent', () => {
  let component: FunEssayComponent;
  let fixture: ComponentFixture<FunEssayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunEssayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
