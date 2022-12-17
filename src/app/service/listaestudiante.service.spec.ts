import { TestBed } from '@angular/core/testing';

import { ListaestudianteService } from './listaestudiante.service';

describe('ListaestudianteService', () => {
  let service: ListaestudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaestudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
