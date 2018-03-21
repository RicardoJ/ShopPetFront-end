import { Component, OnInit } from '@angular/core';
import{fadeIn}from '../animation';
 
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  animations:[fadeIn]
  
})
export class ContactComponent implements OnInit {
  title = 'Contacto';
  emailcontacto : string;

  //se ejecuta despues de Oninit, cualquier cosa hace que se ejecute
ngOnInit(){
  console.log("contact.component cargado!");

}

}
