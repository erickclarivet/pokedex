/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokemonService } from './Pokemon.service';

describe('Service: PokemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonService]
    });
  });

  it('should ...', inject([PokemonService], (service: PokemonService) => {
    expect(service).toBeTruthy();
  }));
});
