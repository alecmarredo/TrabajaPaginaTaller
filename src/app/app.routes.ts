import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Productos } from './paginas/productos/productos';
import { Carrito } from './compartidos/carrito/carrito';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Contacto } from './paginas/contacto/contacto';
import { Registro } from './auth/registro/registro';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { Compras } from './paginas/compras/compras';
import { Remeras } from './paginas/productos/secciones/remeras/remeras';
import { Camperas } from './paginas/productos/secciones/camperas/camperas';
import { Calzado } from './paginas/productos/secciones/calzado/calzado';
import { Accesorios } from './paginas/productos/secciones/accesorios/accesorios';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'productos', component: Productos },
    { path: 'remeras', component: Remeras },
    { path: 'camperas', component: Camperas },
    { path: 'calzado', component: Calzado },
{    path: 'accesorios', component: Accesorios },
    { path: 'carrito', component: Carrito },
    { path: 'ofertas', component: Ofertas },
    { path: 'contacto', component: Contacto },
    { path: 'registro', component: Registro },
    { path: 'favoritos', component: Favoritos },
    { path: 'inicioSesion', component: InicioSesion },
    {path: 'compras', component: Compras},
];