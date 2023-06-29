import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../model/pokemon.model';

@Pipe({
  name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(
    pokemons: Pokemon[],
    nameFilter: string,
    numberFilter: string,
    typeFilter: string
  ): Pokemon[] {
    if (nameFilter || numberFilter || typeFilter) {
      const filtered = pokemons.filter((pokemon) => {
        const isNameIn =
          pokemon.name.toLowerCase().indexOf(nameFilter.toLowerCase()) >= 0;
        const isNumberIn =
          pokemon.number.toLowerCase().indexOf(numberFilter.toLowerCase()) >= 0;
        const isTypeIn =
          typeFilter == '' ||
          pokemon.types.filter(
            (type: string) =>
              type.toLowerCase().indexOf(typeFilter.toLowerCase()) >= 0
          ).length > 0;
        return isNameIn && isNumberIn && isTypeIn;
      });
      return filtered;
    } else {
      return pokemons;
    }
  }
}
