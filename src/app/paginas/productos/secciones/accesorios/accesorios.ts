import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';

import { Indumentaria }

from '../../../../models/indumentaria';

import { carrito }

from '../../../../servicio/carrito';

import { favoritos }

from '../../../../servicio/favoritos';

@Component({

selector:'app-accesorios',

imports:[CommonModule],

templateUrl:'./accesorios.html',

styleUrl:'./accesorios.css'

})

export class Accesorios {

public infoIndumentaria:Indumentaria[];

constructor(

private carrito:carrito,

public favoritos:favoritos

){

this.infoIndumentaria=[

{

id:1,

titulo:"Gorro Jordan Shine Me Niño",

categoria:"Accesorios",

descripcion:"Gorro premium de algodón",

descripcion2:"Muy cómodo",

img:"assets/Accesorio 1.jpg",

alt:"Jordan",

precio:57000

},

{

id:2,

titulo:"Gorra Jordan Metal Jumpman",

categoria:"Accesorios",

descripcion:"Gorra premium",

descripcion2:"Muy cómoda",

img:"assets/Accesorio 2.jpg",

alt:"Jordan",

precio:85000

},

{

id:3,

titulo:"Medias adidas Mid",

categoria:"Accesorios",

descripcion:"Medias premium",

descripcion2:"Muy comódas",

img:"assets/Accesorio 3.jpg",

alt:"Adidas",

precio:30000

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