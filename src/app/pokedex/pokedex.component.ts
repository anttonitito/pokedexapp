import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokedexService } from '../services/pokedex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokemones: Array<Pokemon> = new Array<Pokemon>();
  //esOscuro: boolean;
  constructor(private pokedexInyectado: PokedexService, private ruta: Router) { }

  ngOnInit() {
    this.pokedexInyectado.getAllPokemon().subscribe((pokemonesRecibidos)=>{
      this.pokemones=pokemonesRecibidos;
    });
    
    //this.esOscuro = this.UsuarioInyectado.esOscuro;
  }

  irAlDetalle(pokemon: Pokemon){
    this.pokedexInyectado.pokemon = pokemon;
    this.ruta.navigateByUrl('pokemonDetalle');
  }
}
