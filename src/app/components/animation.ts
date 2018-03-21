import {animate, style, state, transition , trigger} from '@angular/animations';




export const fadeIn=
trigger('fadeIn',[
   
    transition(':enter',[
        style({
            opacity: 0,
            transform:'translateY(-15%)'
        }),
         animate ('500ms linear', 
         style({
            opacity: 1,
            transform:'translateY(0%)'
        }))
    ]),
   
]);