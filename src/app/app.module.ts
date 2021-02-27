import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BookMenuComponent } from './book-menu/book-menu.component';
import { DragonComponent } from './dragon/dragon.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule 
    ],
  declarations: [ 
    AppComponent, ToolbarComponent, BookMenuComponent, DragonComponent, 
    ],
  bootstrap:    [ 
    AppComponent 
    ]
})
export class AppModule { }
