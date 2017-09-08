import { TestBed, inject } from '@angular/core/testing';

import { EchartsService } from './echarts.service';

describe('EchartsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EchartsService]
    });
  });

  it('should be created', inject([EchartsService], (service: EchartsService) => {
    expect(service).toBeTruthy();
  }));
});
