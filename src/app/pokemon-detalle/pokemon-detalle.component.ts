import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { AtributoPokemon } from '../models/atributoPokemon';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.scss']
})
export class PokemonDetalleComponent implements OnInit {
  pokemon: Pokemon = new Pokemon();
  atribPokemon: AtributoPokemon = new AtributoPokemon();
  constructor(private pokedexInyectado: PokedexService) { }

  ngOnInit(): void {
    this.pokemon = this.pokedexInyectado.pokemon;
    this.pokedexInyectado.getPokemon(this.pokemon.id).subscribe((atributoPokemonRecibido) => {
      this.atribPokemon = atributoPokemonRecibido;
    });
  }

}
