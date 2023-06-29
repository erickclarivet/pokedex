/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LikedPokemonService } from './LikedPokemon.service';

describe('Service: LikedPokemon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LikedPokemonService]
    });
  });

  it('should ...', inject([LikedPokemonService], (service: LikedPokemonService) => {
    expect(service).toBeTruthy();
  }));
});
