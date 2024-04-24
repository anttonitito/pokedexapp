export class PokemonIng{
    id: string;
    name: {
        english: string;
        japanese: string;
        chinese: string;
        french: string;
    };
    description: string;
    type: string;
    imagen: string;


    constructor( ){
        this.id         = '';
        this.name     = {
        "english":'',
        "japanese": '',
        "chinese": '',
        "french": '',
        };
        this.description= '';
        this.type       = '';
        this.imagen     = '';

    }
}