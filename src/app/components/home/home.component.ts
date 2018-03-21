import { Component, OnInit } from '@angular/core';
import{fadeIn}from '../animation';
import { animation } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  animations:[fadeIn]
  
})
export class HomeComponent implements OnInit {
  title = 'Welcome!';

  //se ejecuta despues de Oninit, cualquier cosa hace que se ejecute
ngOnInit(){
  console.log("Home.component cargado!");

}
}
