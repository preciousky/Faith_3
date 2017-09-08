/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FunEssayService } from './fun-essay.service';

describe('Service: FunEssay', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FunEssayService]
    });
  });

  it('should ...', inject([FunEssayService], (service: FunEssayService) => {
    expect(service).toBeTruthy();
  }));
});