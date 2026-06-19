import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { carrito } from '../../servicio/carrito';

@Component({

  selector:'app-carrito',

  standalone:true,

  imports: [RouterLink],

  templateUrl:'./carrito.html',

  styleUrls:['./carrito.css']

})

export class Carrito {

  carritoProductos:any[] = [];

  constructor(

    public carrito:carrito

  ){

    this.carritoProductos =

    this.carrito.obtenerCarrito();

  }

  aumentarCantidad(productos:any){

    productos.cantidad++;

  }

  disminuirCantidad(productos:any){

    if(productos.cantidad > 1){

      productos.cantidad--;

    }

  }

  eliminarProducto(productos:any){

    this.carrito.eliminarProducto(

      productos.id

    );

    this.carritoProductos =

    this.carrito.obtenerCarrito();

  }

  obtenerTotal():number{

    let total = 0;

    for(let productos of this.carritoProductos){

      total +=

      productos.precio *

      productos.cantidad;

    }

    return total;

  }

}