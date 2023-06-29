import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon.model';

import { LikedPokemonService } from '../services/LikedPokemon.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss']
})
export class LikedComponent implements OnInit {

  likedPokemons: Pokemon[];

  constructor(private likedPokemonService: LikedPokemonService) { 
    this.likedPokemons = [];
  }

  ngOnInit(): void {
    this.likedPokemons = this.likedPokemonService.getLiked();
  }

}
