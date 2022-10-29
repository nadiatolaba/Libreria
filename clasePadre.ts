export class Articulo {
    protected titulo: string;
    protected autor: string;
    protected precio: number;

    public constructor(pTitulo: string, pAutor: string, pPrecio: number) {
        this.titulo = pTitulo;
        this.autor = pAutor;
        this.precio = pPrecio;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public getPrecio(): number {
        return this.precio;
    }
}