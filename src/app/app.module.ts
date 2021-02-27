import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BookMenuComponent } from './book-menu/book-menu.component';
import { DragonComponent } from './dragon/dragon.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule ,
    ],
  declarations: [ 
    AppComponent, ToolbarComponent, BookMenuComponent, DragonComponent, LoginComponent,  
    ],
  bootstrap:    [ 
    AppComponent 
    ]
})
export class AppModule { }
