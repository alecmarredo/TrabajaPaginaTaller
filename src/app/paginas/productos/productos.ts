import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Indumentaria } from '../../models/indumentaria';

import { carrito } from '../../servicio/carrito';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})

export class Productos {

  public infoIndumentaria: Indumentaria[];

  constructor(

    private carrito: carrito

  ) {

    this.infoIndumentaria = [

      {
        id: 1,
        titulo: "Buzo Negro Armani Exchange Original",
        categoria: "Buzos",
        descripcion: "Buzo premium de algodón.",
        descripcion2: "Original y con excelente fit.",
        img: "assets/buzo cnguro ax.jpeg",
        alt: "Buzo Negro Armani Exchange Original",
        precio: 1500000,
      },

      {
        id: 2,
        titulo: "Buzo Champion Gris Original",
        categoria: "Buzos",
        descripcion: "Buzo Champion gris premium.",
        descripcion2: "Modelo clásico y cómodo.",
        img: "assets/buzo champion canguro.jpeg",
        alt: "Buzo Champion Gris Original",
        precio: 95000,
      }

    ];

  }

  agregarAlCarrito(productos: any){

    this.carrito.agregarAlCarrito(productos);

  }

}