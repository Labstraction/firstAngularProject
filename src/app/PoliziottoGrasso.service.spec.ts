/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PoliziottoGrassoService } from './PoliziottoGrasso.service';

describe('Service: PoliziottoGrasso', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoliziottoGrassoService]
    });
  });

  it('should ...', inject([PoliziottoGrassoService], (service: PoliziottoGrassoService) => {
    expect(service).toBeTruthy();
  }));
});
