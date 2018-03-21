import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute, Params} from '@angular/router';
import{GLOBAL} from '../../../services/global';
import{AnimalService} from '../../../services/animal.service'
import{UserService} from '../../../services/user.service';
import{UploadService} from '../../../services/upload.service'
import{Animal} from '../../../models/animal';
import{fadeLateral} from '../../animation';

@Component({
  selector: 'admin-edit',
  templateUrl: '../add/add.component.html',
  animations:[fadeLateral],
 providers: [UserService,AnimalService,UploadService]
})
export class EditComponent implements OnInit{
  public title;
  public animal : Animal;
  public identity;
  public token;
  public url: string;
  public status;
  public is_edit;

  constructor(

    private _route : ActivatedRoute,
    private _router : Router,
    private _userService : UserService,
    private _animalService : AnimalService,
    private _uploadService : UploadService
  ){
    this.title = 'Editar';
    this.animal = new Animal('','','',2017,'','');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url= GLOBAL.url;
    this.is_edit = true;
  }

 ngOnInit(){
   console.log('animal Edit component cargado');
   this.getAnimal();
 }
 getAnimal(){
  this._route.params.forEach((params: Params)=>{
    let id = params['id'];

    this._animalService.getAnimal(id).subscribe(
        response=>{
            if (!response.animal) {
                this._router.navigate(['/']);
                
            }else{
                this.animal = response.animal;
            }
        },
        error=>{
            console.log(<any>error);
            this._router.navigate(['/']);
                
        }
    );
  });
}
 onSubmit(){
  var id=this.animal._id;
   this._animalService.editAnimal(this.token , id,this.animal).subscribe(
     response =>{
       if (!response.animal) {
         this.status= 'error';
         
       }else{
         this.status= 'success';
         this.animal = response.animal;

         //subir imagen del animal
         if (!this.filesToUpload) {
          this._router.navigate(['/animal',this.animal._id]);
        }else{
            //subida de la imagen
            this._uploadService.makeFileRequest(this.url+'upload-image-animal/'+this.animal._id,[],
            this.filesToUpload, this.token,'image')
                .then((result : any)=>{
                        this.animal.image = result.image;
                        
                        this._router.navigate(['/animal',this.animal._id]);
                       
                });
        }
           
         }
        


     },
     error=>{
       var errormessage = <any>error;
       if (errormessage !=null) {
         this.status = 'error';
         
       }

     }
   );
 }
 public filesToUpload: Array<File>;
 fileChangeEvent(fileInput : any){
     this.filesToUpload = <Array<File>>fileInput.target.files;
  

 }
}

