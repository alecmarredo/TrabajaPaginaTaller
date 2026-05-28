import { Component } from '@angular/core';

import { favoritos }

from '../../servicio/favoritos';

import { carrito }

from '../../servicio/carrito';

@Component({

selector:'app-favoritos',

templateUrl:'./favoritos.html',

styleUrls:['./favoritos.css']

})

export class Favoritos {

favoritosProductos:any[]=[];

constructor(

public favoritos:favoritos,

private carrito:carrito

){

this.favoritosProductos=

this.favoritos.obtenerFavoritos();

}

comprar(productos:any){

this.carrito.agregarAlCarrito(

productos

);

}

eliminar(productos:any){

this.favoritos.eliminarFavorito(

productos.id

);

this.favoritosProductos=

this.favoritos.obtenerFavoritos();

}

}