import { Articulo } from "./clasePadre";
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

    public calcularPrecio(cliente: Cliente, articulo: Articulo): number {
        let precioConDescuento: number = 0;
        precioConDescuento = articulo.getPrecio() * (1 - cliente.getDescuento());
        return precioConDescuento;
    }

    public consultarCompraArticulo(cliente: Cliente, articulo: Articulo): void {
        let encontrado: boolean = false;
        let listaLibrosRevistas = [ ...cliente.getListaComprasLibro().concat(), ...cliente.getListaComprasRevista()];

        for (let i: number = 0; i < listaLibrosRevistas.length; i++) {
            if (articulo.getTitulo() === listaLibrosRevistas[i].getTitulo()) {
                encontrado = true;
            }
        }
        if (encontrado === true) {
            console.log(`El articulo ${articulo.getTitulo()} fue comprado`);
        } else {
            console.log(`El articulo ${articulo.getTitulo()} no fue comprado`);
        }
    }
}