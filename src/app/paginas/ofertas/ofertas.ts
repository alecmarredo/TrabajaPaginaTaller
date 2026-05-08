import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Descuento } from '../../models/descuento';

@Component({
  selector: 'app-ofertas',
  imports: [CommonModule],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {

  public infoDescuento: Descuento[];
  
    constructor(){

      this.infoDescuento= [

      {
      id: 1,
      titulo: 'Buzo Armani Exchange Negro',
      categoria: 'Buzo',
      descripcion: 'Buzo premium de algodón, cómodo y elegante.',
      descripcion2: 'dsds',
      img: 'assets/IMG_5312.jpeg',
      alt: 'Buzo Armani Negro',
      precioViejo: 59.99,
      precioNuevo: 39.99,
      descuento: '27%',
      enOferta: true,
      },

      ]
    }
}
