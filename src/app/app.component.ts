import { Component, OnInit, DoCheck} from '@angular/core';
import {UserService} from './services/user.service';
import{Router , ActivatedRoute, Params} from '@angular/router';
import {GLOBAL } from './services/global';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[UserService]
})
export class AppComponent  implements OnInit, DoCheck {
  public title: string;
  public identity;
  public url : string;

  constructor(
private _useService : UserService,
private _route : ActivatedRoute,
private _router : Router,

  ){
    this.title = 'SHOP PET';
    this.url = GLOBAL.url;
  }
  ngOnInit(){
    this.identity = this._useService.getIdentity();

  }
  ngDoCheck(){
    this.identity = this._useService.getIdentity();
  }
  logout(){
    localStorage.clear();
    this.identity= null;
  this._router.navigate(['/']);
  }



}

