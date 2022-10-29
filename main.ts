import { Libro } from "./claseLibro";
import { Revista } from "./claseRevista";
import { Cliente } from "./claseCliente";
import { Libreria } from "./claseLibreria";

let listAutores = ['Pedro','Rosa','Juan','Araceli'];
let listGeneros = ['Drama','Terror','Comedia','Vaqueros'];

let libro1: Libro = new Libro('Campanita', 'Pedro', 50, 200, 'Resumen 1', 'Comedia');
let libro2: Libro = new Libro('Iron Man', 'Juan', 150, 300, 'Resumen 2', 'Drama');

let revista1: Revista = new Revista('Para Ti', 'Rosa', 20, 20, 2022);
let revista2: Revista = new Revista('Oeste', 'Araceli', 15, 12, 2021);

let cliente1: Cliente = new Cliente('Juan', 'Perez', 10150270, 'Velez', listAutores, listGeneros, 0.1);
let cliente2: Cliente = new Cliente('Hernan', 'Rodriguez', 25675098, 'Nuñez', listAutores, listGeneros, 0.2);
let cliente3: Cliente = new Cliente('Maria', 'Gomez', 34643247, 'Caballito', listAutores, listGeneros, 0.3);

let arregloCliente: Cliente[] = [cliente1, cliente2, cliente3];
let arregloLibro: Libro[] = [libro1, libro2];
let arregloRevista: Revista[] = [revista1, revista2];

let libreria1: Libreria = new Libreria(arregloCliente, arregloLibro, arregloRevista);

let precio1 = libreria1.calcularPrecio(cliente1, libro1);
let precio2 = libreria1.calcularPrecio(cliente2, libro2);
let precio3 = libreria1.calcularPrecio(cliente1, revista1);
let precio4 = libreria1.calcularPrecio(cliente3, revista2);


console.log(precio1);
console.log(precio2);
console.log(precio3);
console.log(precio4);
cliente1.comprarLibro(libro2);
libreria1.consultarCompraArticulo(cliente1, libro1);
libreria1.consultarCompraArticulo(cliente1, libro2);
cliente1.leGustaLibro(libro2);
cliente2.leGustaLibroExigente(libro1);