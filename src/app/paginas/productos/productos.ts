import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Indumentaria } from '../../models/indumentaria';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  public infoIndumentaria: Indumentaria[];

  constructor() {

  this.infoIndumentaria = [
    {
    id: 1,
    titulo: "Buzo Negro Armani Exchange Original",
    categoria: "Buzos",
    descripcion: "Buzo premium de algodón, cómodo y elegante para cualquier ocasión.",
    descripcion2: "Observacion: Modelo muy lindo que nunca falla, original y con buen fit.",
    img: "assets/buzo cnguro ax.jpeg",
    alt: "Buzo Negro Armani Exchange Original",
    precio: 44.99,
    },

    {
    id:2,
    titulo: "Buzo Champion Gris Original",
    categoria: "Buzos",
    descripcion: "Talla: M fit S",
    descripcion2: "Observacion: Modelo muy lindo que nunca falla, original y con buen fit.",
    img: "assets/buzo champion canguro.jpeg",
    alt: "Buzo Champion Gris Original",
    precio: 39.99,
    },

    {
    id:3,
    titulo: "Buzo Boss Negro Redondo Original",
    categoria: "Buzos",
    descripcion: "Talla: M fit S",
    descripcion2: "Observacion: Modelo muy lindo que nunca falla, original y con buen fit.",
    img: "assets/buzo cuello redondo boss.jpeg",
    alt: "Buzo Boss Negro Redondo Original",
    precio: 20.99,
    },

    {
    id:4,
    titulo: "Buzo Boss Negro Canguro Original",
    categoria: "Buzos",
    descripcion: "Talla: M fit S",
    descripcion2: "Observacion: Modelo muy lindo que nunca falla, original y con buen fit.",
    img: "assets/buzo canguro boss.jpeg",
    alt: "Buzo Boss Negro Canguro Original",
    precio: 20.99,
    },

  ]
}
 }
