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

titulo:"Buzo cuello redondo adidas 3 Tira Hombre",

categoria:"Buzos",

descripcion:"Adentrate en un mundo donde el estilo se une a la comodidad con el Buzo cuello redondo adidas 3 Tira Hombre.",

descripcion2:"",

img:"assets/Buzo 1.jpg",

alt:"Adidas",

precio:130000

},

{

id:2,

titulo:"Buzo Jordan Brooklyn Oversized Hombre",

categoria:"Buzos",

descripcion:"El Buzo Jordan Brooklyn Oversized Hombre une comodidad y estilo urbano con un corte amplio que ofrece libertad de movimiento y un look relajado. ",

descripcion2:"",

img:"assets/Buzo 2.jpg",

alt:"Jordan",

precio:180000

},

{

id:3,

titulo:"Buzo Nike Club Hombre",

categoria:"Buzos",

descripcion:"El Buzo Nike Club Hombre es un clásico que nunca falla: cómodo, versátil y con el estilo atemporal de Nike.",

descripcion2:"",

img:"assets/Buzo 3.jpg",

alt:"Nike",

precio:160000

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