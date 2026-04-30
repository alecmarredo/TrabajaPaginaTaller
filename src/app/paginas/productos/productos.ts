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
    titulo: "Buzo Jordan Negro Original",
    categoria: "Buzos",
    descripcion: "Buzo premium de algodón, cómodo y elegante para cualquier ocasión.",
    descripcion2: "Observacion: Modelo muy lindo que nunca falla, original y con buen fit.",
    img: "assets/IMG_5312.jpeg",
    alt: "Buzo Jordan Negro Original",
    precio: 44.99,
    },

    {
    id:2,
    titulo: "Buzo Champion Gris Original",
    categoria: "Buzos",
    descripcion: "Talla: M fit S",
    descripcion2: "Observacion: Modelo muy lindo que nunca falla, original y con buen fit.",
    img: "assets/IMG_5312.jpeg",
    alt: "Buzo Jordan Negro Original",
    precio: 44.99,
    },

  ]
}
 }
