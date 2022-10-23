import { Padre } from "./clasePadre";
import { Libro } from "./claseLibro";
import { Revista } from "./claseRevista";
import { Cliente } from "./claseCliente";

export class Libreria {
    private listaClientes: Cliente[];
    private listaLibros: Libro[];
    private listaRevistas: Revista[];

    public constructor(pListaClientes: Cliente[], pListaLibros: Libro[], pListaRevista: Revista[]) {
        this.listaClientes = pListaClientes;
        this.listaLibros = pListaLibros;
        this.listaRevistas = pListaRevista;
    }

    public setRevista(nuevaRevista: Revista): void {
        this.listaRevistas.push(nuevaRevista);
    }

    public setLibro(nuevoLibro: Libro): void {
        this.listaLibros.push(nuevoLibro);
    }

    public setCliente(nuevoCliente: Cliente): void {
        this.listaClientes.push(nuevoCliente);
    }

    public calcularPrecio(cliente: Cliente, articulo: Padre): number {
        let precioConDescuento: number = 0;
        precioConDescuento = articulo.getPrecio() * (1-cliente.getDescuento());
        return precioConDescuento;
    }
}