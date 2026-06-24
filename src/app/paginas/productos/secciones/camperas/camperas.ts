import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';

import { Indumentaria }

from '../../../../models/indumentaria';

import { carrito }

from '../../../../servicio/carrito';

import { favoritos }

from '../../../../servicio/favoritos';

@Component({

selector:'app-camperas',

imports:[CommonModule],

templateUrl:'./camperas.html',

styleUrl:'./camperas.css'

})

export class Camperas {

public infoIndumentaria:Indumentaria[];

constructor(

private carrito:carrito,

public favoritos:favoritos

){

this.infoIndumentaria=[

{

id:1,

titulo:"Campera Puma Rompeviento Essentials Padded Hombre",

categoria:"Camperas",

descripcion:"Elegante, confortable y siempre a la moda",

descripcion2:"La línea PUMA Essentials está diseñada para tus días relajados.",

img:"assets/Campera 1.jpg",

alt:"Puma",

precio:160000

},

{

id:2,

titulo:"Campera Nike Sportswear Club Therma Hombre",

categoria:"Camperas",

descripcion:"La Campera Nike Sportswear Club Club Therma Hombre es tu aliada definitiva para enfrentar los días más fríos del año sin perder el estilo urbano.",

descripcion2:"",

img:"assets/Campera 2.jpg",

alt:"Nike",

precio:480000

},

{

id:3,

titulo:"Campera Jordan Brooklyn Draft Hombre",

categoria:"Camperas",

descripcion:"Ligera y resbaladiza, la Campera Jordan Brooklyn Draft Hombre es la versión de Jordan del cortavientos.",

descripcion2:"Muy confortable",

img:"assets/Campera 3.jpg",

alt:"Jordan",

precio:220000

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