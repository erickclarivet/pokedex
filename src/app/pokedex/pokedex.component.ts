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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
