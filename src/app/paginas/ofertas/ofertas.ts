import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Descuento } from '../../models/descuento';
import { carrito } from '../../servicio/carrito';

@Component({
  selector: 'app-ofertas',
  imports: [CommonModule],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})

export class Ofertas {

  public infoDescuento: Descuento[];

  constructor(
    private carrito: carrito
  ){

    this.infoDescuento = [

      {
        id: 1,
        titulo: 'Camiseta Argentina adidas Titular 2026 Hombre',
        categoria: 'Remeras',
        descripcion: 'Remera Original de la Selección Argentina.',
        descripcion2: 'Muy cómoda',
        img: 'assets/Oferta 1.jpg',
        alt: 'Camiseta Argentina adidas',
        precioViejo: 150000,
        precioNuevo: 109500,
        descuento: '27%',
        enOferta: true,
      },

      {
        id: 2,
        titulo: 'Zapatillas adidas Campus ST Hombre',
        categoria: 'Calzado',
        descripcion: 'Una versión potenciada del modelo Campus.',
        descripcion2: 'Muy cómodas para cualquier ocasión',
        img: 'assets/Oferta 2.jpg',
        alt: 'Campus ST',
        precioViejo: 230000,
        precioNuevo: 161000,
        descuento: '30%',
        enOferta: true,
      },

      {
        id: 3,
        titulo: 'Buzo con cierre adidas Firebird Mujer',
        categoria: 'Buzos',
        descripcion: 'Parte de la colección Adicolor.',
        descripcion2: '',
        img: 'assets/Oferta 3.jpg',
        alt: 'Firebird',
        precioViejo: 150000,
        precioNuevo: 75000,
        descuento: '50%',
        enOferta: true,
      }

    ];

  }

  agregarAlCarrito(productos:any){

    this.carrito.agregarAlCarrito({

      id: productos.id,

      titulo: productos.titulo,

      img: productos.img,

      precio: productos.precioNuevo

    });

  }

}