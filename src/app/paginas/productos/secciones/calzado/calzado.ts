import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';

import { Indumentaria }

from '../../../../models/indumentaria';

import { carrito }

from '../../../../servicio/carrito';

import { favoritos }

from '../../../../servicio/favoritos';

@Component({

selector:'app-calzado',

imports:[CommonModule],

templateUrl:'./calzado.html',

styleUrl:'./calzado.css'

})

export class Calzado {

public infoIndumentaria:Indumentaria[];

constructor(

private carrito:carrito,

public favoritos:favoritos

){

this.infoIndumentaria=[

{

id:1,

titulo:"Zapatillas adidas Superstar II Cuero Hombre",

categoria:"Calzado",

descripcion:"Zapatillas premium de cuero",

descripcion2:"Muy cómodas para cualquier ocasión",

img:"assets/Zapatillas 1.jpg",

alt:"Adidas",

precio:220000

},

{

id:2,

titulo:"Zapatillas Nike Air Force 1 '07 Hombre",

categoria:"Calzado",

descripcion:"Zapatillas premium de cuero",

descripcion2:"Muy cómodas para cualquier ocasión",

img:"assets/Zapatillas 2.jpg",

alt:"Nike",

precio:250000

},

{

id:3,

titulo:"Zapatillas Nike Dunk Low Retro Hombre",

categoria:"Calzado",

descripcion:"Zapatillas premium de cuero",

descripcion2:"Muy comodas para cualquier ocasión",

img:"assets/Zapatillas 3.jpg",

alt:"Nike",

precio:240000

}

];

}

agregarAlCarrito(productos:any){

this.carrito.agregarAlCarrito(

productos

);

}

toggleFavorito(productos:any){

if(

this.favoritos.estaEnFavoritos(

productos.id

)

){

this.favoritos.eliminarFavorito(

productos.id

);

}else{

this.favoritos.agregarFavorito(

productos

);

}

}

}