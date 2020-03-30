import { TestBed } from '@angular/core/testing';

import { CovidDatasourceService } from './covid-datasource.service';

describe('CovidDatasourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CovidDatasourceService = TestBed.get(CovidDatasourceService);
    expect(service).toBeTruthy();
  });
});
