import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Productos } from './paginas/productos/productos';
import { Carrito } from './compartidos/carrito/carrito';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Contacto } from './paginas/contacto/contacto';
import { Registro } from './auth/registro/registro';
import { Favoritos } from './compartidos/favoritos/favoritos';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'productos', component: Productos },
    { path: 'carrito', component: Carrito },
    { path: 'ofertas', component: Ofertas },
    { path: 'contacto', component: Contacto },
    { path: 'registro', component: Registro },
    { path: 'favoritos', component: Favoritos },
    { path: 'inicioSesion', component: InicioSesion },
];