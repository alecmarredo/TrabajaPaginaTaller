import { Component } from '@angular/core';

import { FormsModule }

from '@angular/forms';

@Component({

selector:'app-compras',

standalone:true,

imports:[FormsModule],

templateUrl:'./compras.html',

styleUrls:['./compras.css']

})

export class Compras {

nombre='';

apellido='';

email='';

telefono='';

direccion='';

ciudad='';

metodoPago='';

comprar(){

alert(

'Compra realizada correctamente'

);

}

}