import { Articulo } from "./clasePadre";

export class Revista extends Articulo {
    private numero: number;
    private año: number;

    public constructor(pTitulo: string, pAutor: string, pPrecio: number, pNumero: number, pAño: number) {
        super(pTitulo, pAutor, pPrecio);
        this.numero = pNumero;
        this.año = pAño;
    }

    public getNumero(): number {
        return this.numero;
    }

    public getAño(): number {
        return this.año;
    }
}