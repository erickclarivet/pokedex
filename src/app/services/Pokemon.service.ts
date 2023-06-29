import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon.model';

@Injectable()
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>('../../assets/pokemons.json');
  }
}
