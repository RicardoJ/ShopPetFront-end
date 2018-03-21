import {Component, OnInit} from '@angular/core';
import {trigger, state,style,transition,animate} from '@angular/core';
import { animation } from '@angular/core/src/animation/dsl';
import{fadeIn}from '../animation';
@Component({
    selector:'tienda',
    templateUrl: './tienda.component.html',
    styleUrls:['./tienda.component.css'],
    animations:[
        trigger('marcar',[
            state('inactive',style({
                border:'5px solid #ccc'
            })),
            state('active', style({
                border :'5px solid yellow',
                background :'red',
                borderRadius :'50px',
                transform :'scale(1.2)'

            })),
            transition('inactive => active', animate ('500ms linear')),
            transition('active => inactive', animate ('500ms linear'))
        ]),
        [fadeIn]
    ]

})

export class TiendaComponent implements OnInit {
    public titulo;
    public nombreDelParque : string;
    public status;

    constructor(){
        this.titulo="Esta es la tienda";
        this.status ='inactive';
    }
    cambiarEstado(status){
        if(status == 'inactive'){
            this.status='active';
        }else{
            this.status='inactive';
        }

    }
    ngOnInit(){
      
        $('#botonjq').click(function(){
            console.log('click');
                 $('#textojq').removeClass('hidden').fadeIn();
        });
        
    }
    mostrarNombre(){
        console.log(this.nombreDelParque);
    }
    textoRichEditor(event){
        console.log(event);
    }
}