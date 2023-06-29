import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon.model';

@Injectable()
export class LikedPokemonService {
  private likedPokemons: Pokemon[] = [];

  getLiked(): Pokemon[] {
    return this.likedPokemons;
  }

  liked(pokemon: Pokemon) {
    const filtered = this.likedPokemons.filter((likedPokemon) => {
      return (
        likedPokemon.name === pokemon.name &&
        likedPokemon.number === pokemon.number &&
        likedPokemon.src === pokemon.src
      );
    });

    if (filtered.length == 0) {
      this.add(pokemon);
    } else {
      this.delete(filtered[0]);
    }
  }

  add(pokemon: Pokemon) {
    const index = this.likedPokemons
      .map((likedPokemon) => likedPokemon)
      .indexOf(pokemon);
    if (index == -1) {
      this.likedPokemons.push(pokemon);
    }
  }

  delete(pokemon: Pokemon) {
    const index = this.likedPokemons
      .map((likedPokemon) => likedPokemon)
      .indexOf(pokemon);
    if (index >= 0) {
      this.likedPokemons.splice(index, 1);
    }
  }
}
