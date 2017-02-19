import { TestBed, inject } from '@angular/core/testing';
import { PlanetsService } from './planets.service';

describe('PlanetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetsService]
    });
  });

  it('should ...', inject([PlanetsService], (service: PlanetsService) => {
    expect(service).toBeTruthy();
  }));
});
