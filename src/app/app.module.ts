import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BookMenuComponent } from './book-menu/book-menu.component';
import { DragonComponent } from './dragon/dragon.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

const environment = {
  production: false,
      firebase: {
          apiKey: "AIzaSyC8YOMLaOiD72p4i5DYRSAFwQB7B0AO9vE",
          authDomain: "dragonwriter-2d4d4.firebaseapp.com",
          projectId: "dragonwriter-2d4d4",
          storageBucket: "dragonwriter-2d4d4.appspot.com",
          messagingSenderId: "986346360064",
          appId: "1:986346360064:web:552c83759e18a086e0b7e5",
          measurementId: "G-6VYBWWEX41"
        }
};

@NgModule({
  imports:      [ 
    BrowserModule, 
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule ,
    AngularFirestoreModule,
    AngularFireAuthModule
    ],
  declarations: [ 
    AppComponent, ToolbarComponent, BookMenuComponent, DragonComponent, LoginComponent, UserProfileComponent,  
    ],
  bootstrap:    [ 
    AppComponent 
    ],
  providers: [AuthService]
})
export class AppModule { }



