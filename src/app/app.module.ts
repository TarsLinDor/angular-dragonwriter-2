import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule 
    ],
  declarations: [ 
    AppComponent, ToolbarComponent, 
    ],
  bootstrap:    [ 
    AppComponent 
    ]
})
export class AppModule { }
