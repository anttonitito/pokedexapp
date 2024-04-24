import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokedexService } from '../services/pokedex.service';
import { PokemonIng } from '../models/pokemonIng';

interface NombrePoke{
  english: string,
      japanese: string,
      chinese: string,
      french: string

}

@Component({
  selector: 'app-agregar-pokemon',
  templateUrl: './agregar-pokemon.component.html',
  styleUrls: ['./agregar-pokemon.component.scss']
})
export class AgregarPokemonComponent implements OnInit {
  pokemon: Pokemon = new Pokemon();
  pokemonIng: PokemonIng = new PokemonIng();
  nombrePoke: NombrePoke = {
      english: '',
      japanese: '',
      chinese: '',
      french: ''
    }
  
  numOrden: string = '';
  img: string = '' ;
  nomTraducida: string ='';
  desTraducida: string ='';
  tipoTraducida: string= '';
  pokemones: Array<Pokemon> = new Array<Pokemon>();
  pokemonesIng: Array<PokemonIng> = new Array<PokemonIng>();

  formularioPokemon: FormGroup;
  constructor(private pokemonInyectado: PokedexService, private fbGenerador: FormBuilder) {
    this.formularioPokemon = this.fbGenerador.group({
      id: {value: '', disabled: true},
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipo: ['', Validators.required],
      imagen: {value: '', disabled: true}
    });

    
   }

  ngOnInit(): void {
   

    
    this.pokemonInyectado.getAllPokemonIng().subscribe((PokeIngRecibido) =>{
      this.pokemonesIng = PokeIngRecibido;
      this.nombrePoke.english = PokeIngRecibido[this.pokemones.length].name.english;
      console.log(this.nombrePoke.english);
      this.desTraducida = this.pokemonesIng[this.pokemones.length].description;
      this.tipoTraducida = this.pokemonesIng[this.pokemones.length].type;
      this.formularioPokemon.patchValue({ nombre: this.nombrePoke.english});
      this.formularioPokemon.patchValue({ descripcion: this.desTraducida });
      this.formularioPokemon.patchValue({ tipo: this.tipoTraducida });
   
    });

    

    this.pokemonInyectado.getAllPokemon().subscribe((pokemonesRecibidos) => {
      this.pokemones = pokemonesRecibidos;
      this.numOrden = this.pokemones[this.pokemones.length-1].id + 1;
      this.formularioPokemon.patchValue({ id:  this.numOrden});
      this.formularioPokemon.patchValue({ imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+this.numOrden+'.png' });
      
      
      //this.formularioPokemon.value.id = this.pokemones[this.pokemones.length-1].id;
      this.img = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+this.numOrden+'.png';
      console.log(this.pokemones[this.pokemones.length-1].id + 1);
    });

  }


  agregar(){
    this.pokemon = this.formularioPokemon.value as Pokemon;
    this.pokemonInyectado.create(this.pokemon).subscribe((PokemonRecibido) => {
      console.log(PokemonRecibido);
      console.log('Felicidades has registrado un Pokemon');
      this.formularioPokemon.reset();
    })

  }

}
