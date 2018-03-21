import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing , appRoutingProviders} from './app.routing';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations'; 

//importar nuevo modulo
import {ModuloEmailModule} from './moduloemail/moduloemail.module';
import {AdminModule} from './admin/admin.module';
//componentes
import { AppComponent } from './app.component';
import { SimpleTinyComponent} from './components/simple-tiny/simple-tiny.component';

import {TiendaComponent} from './components/tienda/tienda.componet';
import { ParquesComponent} from './components/parques/parques.component';
import { AnimalsComponent} from './components/animals/animals.component';
import { ContactComponent} from './components/contact/contact.component';
import { HomeComponent} from './components/home/home.component';
import { KeepersComponent} from './components/keepers/keepers.component';
import { RegisterComponent} from './components/register/register.component';
import { LoginComponent} from './components/login/login.component';
import { UserEditComponent} from './components/user-edit/user-edit.component';
import { AnimalDetailComponent} from './components/animal-detail/animal-detail.component';
//servicios
//import {UserService } from './services/user.service'; 
@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent, 
    ContactComponent,
    HomeComponent,
    KeepersComponent,
    SimpleTinyComponent,
    RegisterComponent,
    LoginComponent,
    UserEditComponent,
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    ModuloEmailModule,
    AdminModule,
    

  ],
  providers: [
    appRoutingProviders,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
