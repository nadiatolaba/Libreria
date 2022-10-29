import { Libro } from './claseLibro';
import { Articulo } from './clasePadre';
import { Revista } from './claseRevista';

export class Cliente {
    private nombre: string;
    private apellido: string;
    private dni: number;
    private direccion: string;
    private listAutorFav: string[];
    private listGenFav: string[];
    private listComprasLibro: Libro[];
    private listComprasRevista: Revista[];
    private descuento: number;

    public constructor(pNombre: string, pApellido: string, pDni: number, pDireccion: string, pListAutorFav: string[], pListGenFav: string[], pDescuento: number) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.dni = pDni;
        this.direccion = pDireccion;
        this.listAutorFav = pListAutorFav;
        this.listGenFav = pListGenFav;
        this.listComprasLibro = [];
        this.listComprasRevista = [];
        this.descuento = pDescuento;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public getDni(): number {
        return this.dni;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public getListaAutoresFavoritos(): string[] {
        return this.listAutorFav;
    }

    public getListaGenerosFavoritos(): string[] {
        return this.listGenFav;
    }

    public getListaComprasLibro(): Libro[] {
        return this.listComprasLibro;
    }

    public getListaComprasRevista(): Revista[] {
        return this.listComprasRevista;
    }

    public getDescuento(): number {
        return this.descuento;
    }

    public comprarLibro(libro: Libro): void {
        this.listComprasLibro.push(libro);
    }

    public comprarRevista(revista: Revista): void {
        this.listComprasRevista.push(revista);
    }

    public leGustaLibro(libro: Libro): void {
        let encontrado: boolean = false;
        for (let i: number = 0; i < this.listAutorFav.length; i++) {
            if (libro.getAutor() === this.listAutorFav[i]) {
                encontrado = true;
            }
        }
        if (encontrado === true) {
            console.log(`El autor ${libro.getAutor()} es favorito`);
        } else {
            console.log(`El autor ${libro.getAutor()} no es favorito`);
        }
    }

    public leGustaLibroExigente(libro: Libro): void {
        let encontradoAutor: boolean = false;
        let encontradoGenero: boolean = false;
        for (let i: number = 0; i < this.listAutorFav.length; i++) {
            if (libro.getAutor() === this.listAutorFav[i]) {
                encontradoAutor = true;
                for (let i: number = 0; i < this.listGenFav.length; i++) {
                    if (libro.getGenero() === this.listGenFav[i]) {
                        encontradoGenero = true;
                    }
                }
            }
        }
        if (encontradoAutor === true && encontradoGenero === true) {
            console.log(`El autor ${libro.getAutor()} y el genero "${libro.getGenero()}" son favoritos`);
        } else {
            console.log(`El autor ${libro.getAutor()} y el genero "${libro.getGenero()}" no son favoritos`);
        }
    }
}