/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComunicateValuesService } from './comunicateValues.service';

describe('Service: ComunicateValues', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComunicateValuesService]
    });
  });

  it('should ...', inject([ComunicateValuesService], (service: ComunicateValuesService) => {
    expect(service).toBeTruthy();
  }));
});
