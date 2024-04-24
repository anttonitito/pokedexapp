import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AtributoPokemon } from '../models/atributoPokemon';
import { PokemonIng } from '../models/pokemonIng';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemon: Pokemon = new Pokemon();

  constructor(private http: HttpClient) {

   }

   getAllPokemon() :Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('http://localhost:3000/pokemons/');
   }
   getAllPokemonIng() :Observable<PokemonIng[]>{
    return this.http.get<PokemonIng[]>('http://localhost:3002/pokemons/');
   }
   

   getPokemon(id: string) :Observable<AtributoPokemon>{
    return this.http.get<AtributoPokemon>('http://localhost:3001/atributos/'+id);
    /*.pipe(
      map(pokemon => pokemon.find(p => p.id === id))
    );*/
   }

   create(pokemon: any): Observable<any> {
    return this.http.post('http://localhost:3000/pokemons/', pokemon);
  }


}
