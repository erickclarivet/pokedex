import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { HeaderComponent } from './header/header.component';
import { LikedComponent } from './liked/liked.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './services/Pokemon.service';
import { LikedPokemonService } from './services/LikedPokemon.service';

@NgModule({
  declarations: [AppComponent, PokedexComponent, HeaderComponent, LikedComponent, FilterPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [PokemonService, LikedPokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
