import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';

import { Indumentaria }

from '../../models/indumentaria';

import { carrito }

from '../../servicio/carrito';

import { favoritos }

from '../../servicio/favoritos';

@Component({

selector:'app-productos',

imports:[CommonModule],

templateUrl:'./productos.html',

styleUrl:'./productos.css'

})

export class Productos {

public infoIndumentaria:Indumentaria[];

constructor(

private carrito:carrito,

public favoritos:favoritos

){

this.infoIndumentaria=[

{

id:1,

titulo:"Buzo Negro Armani Exchange Original",

categoria:"Buzos",

descripcion:"Buzo premium de algodón",

descripcion2:"Muy cómodo",

img:"assets/buzo cnguro ax.jpeg",

alt:"Armani",

precio:1500000

},

{

id:2,

titulo:"Buzo Champion Gris Original",

categoria:"Buzos",

descripcion:"Champion original",

descripcion2:"Muy cómodo",

img:"assets/buzo champion canguro.jpeg",

alt:"Champion",

precio:85000

},

{

id:3,

titulo:"Buzo Boss Negro Original",

categoria:"Buzos",

descripcion:"Boss original",

descripcion2:"Muy elegante",

img:"assets/buzo cuello redondo boss.jpeg",

alt:"Boss",

precio:120000

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