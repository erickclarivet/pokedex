import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon.model';
import { LikedPokemonService } from '../services/LikedPokemon.service';
import { PokemonService } from '../services/Pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit, OnDestroy {
  searchFilter = '';
  numberFilter = '';
  typeFilter = '';

  pokemons: Pokemon[];
  subscription: any;

  constructor(
    private pokemonService: PokemonService,
    private likedPokemonService: LikedPokemonService
  ) {
    this.pokemons = [];
  }

  ngOnInit(): void {
    this.subscription = this.pokemonService
      .getPokemons()
      .subscribe((pokemons) => {
        this.pokemons = pokemons;
      });
  }

  onLikedClicked(pokemon: Pokemon) {
    this.likedPokemonService.liked(pokemon);
  }

  getTypeColor(type: string): string {
    debugger;
    switch (type.toUpperCase()) {
      case 'NORMAL':
        return '#CACACA';
      case 'ELECTRIC':
        return '#FFE175';
      case 'FIRE':
        return '#FF8A8A';
      case 'WATER':
        return '#88D1FB';
      case 'ICE':
        return '#C6EAFF';
      case 'FIGHTING':
        return '#FFB169';
      case 'GRASS':
        return '#B4FE7B';
      case 'POISON':
        return '#BF8CD1';
      case 'GROUND':
        return '#CA9F5E';
      case 'ROCK':
        return '#898373';
      case 'STEEL':
        return '#E4E4E4';
      case 'PSYCHIC':
        return '#FFB7FC';
      case 'BUG':
        return '#D1E16F';
      case 'GHOST':
        return '#805594';
      case 'DRAGON':
        return '#C699FF';
      case 'FLYING':
        return '#5F9FFF';
      default:
        return 'black';
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
