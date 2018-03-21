import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
    selector: 'parques',
    templateUrl: './parques.component.html'

})

export class ParquesComponent implements OnChanges, OnInit{
    @Input() nombre: string;
    public metros: number;
    public vegetacion: string;
    public abierto: boolean;

    constructor() {
        this.nombre = "Parque para todos los animales";
        this.metros = 250;
        this.vegetacion = "alta";
        this.abierto = true;

    }
    ngOnChanges(changes: SimpleChanges) {
        console.log("cambios Onchanges");
    }
//una vez por componente
    ngOnInit() {
        console.log("metodo con OnInit")

    }

}