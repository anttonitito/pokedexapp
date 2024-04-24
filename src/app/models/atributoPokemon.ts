export class AtributoPokemon{
    id:string;
    HP:number;
    Ataque: number;
    Defensa: number;
    Ataque_Especial: number;
    Defensa_Especial: number;
    Velocidad: string;
    Altura: string;
    Peso: string;
    Huevo: string;
    Habilidad: string;


    constructor(){
    this.id              ='';
    this.HP              = 0;
    this.Ataque          = 0;
    this.Defensa         = 0;
    this.Ataque_Especial = 0;
    this.Defensa_Especial= 0;
    this.Velocidad       ='';
    this.Altura          ='';
    this.Peso            ='';
    this.Huevo           ='';
    this.Habilidad       ='';
    }
}