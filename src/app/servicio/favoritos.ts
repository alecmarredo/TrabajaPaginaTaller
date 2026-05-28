import { Injectable } from '@angular/core';

@Injectable({

providedIn:'root'

})

export class favoritos {

private favoritos:any[]=[];

agregarFavorito(productos:any){

const existe=

this.favoritos.find(

item => item.id===productos.id

);

if(!existe){

this.favoritos.push(

productos

);

}

}

obtenerFavoritos(){

return this.favoritos;

}

eliminarFavorito(id:number){

this.favoritos=

this.favoritos.filter(

producto=>producto.id!==id

);

}

estaEnFavoritos(id:number){

return this.favoritos.some(

producto=>producto.id===id

);

}

}