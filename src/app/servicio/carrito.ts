import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class carrito {

  carrito:any[] = [];

  agregarAlCarrito(productos:any){

    const productoExistente =
    this.carrito.find(

      item => item.id === productos.id

    );

    if(productoExistente){

      productoExistente.cantidad++;

    }else{

      this.carrito.push({

        id: productos.id,

        imagen: productos.img,

        nombre: productos.titulo,

        precio: productos.precio,

        cantidad:1

      });

    }

  }

  obtenerCarrito(){

    return this.carrito;

  }

  eliminarProducto(id:number){

    this.carrito = this.carrito.filter(

      producto => producto.id !== id

    );

  }

}