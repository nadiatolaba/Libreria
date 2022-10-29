import { Articulo } from "./clasePadre";

export class Libro extends Articulo {
    private cantPaginas: number;
    private resumen: string;
    private genero: string;

    public constructor(pTitulo: string, pAutor: string, pPrecio: number, pPaginas: number, pResumen: string, pGenero: string) {
        super(pTitulo, pAutor, pPrecio);
        this.cantPaginas = pPaginas;
        this.resumen = pResumen;
        this.genero = pGenero;
    }

    public getCantPaginas(): number {
        return this.cantPaginas;
    }

    public getResumen(): string {
        return this.resumen;
    }

    public getGenero(): string {
        return this.genero;
    }
}