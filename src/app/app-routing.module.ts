import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonDetalleComponent } from './pokemon-detalle/pokemon-detalle.component';
import { AgregarPokemonComponent } from './agregar-pokemon/agregar-pokemon.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'pokedex', component: PokedexComponent
  },
  {
    path: 'pokemonDetalle', component: PokemonDetalleComponent
  },
  {
    path: 'agregarPokemon', component: AgregarPokemonComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
