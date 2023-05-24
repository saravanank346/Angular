import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import { FormsModule } from "@angular/forms";
import { NewcompComponent } from './newcomp/newcomp.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServicesComponent } from './services/services.component';
import { Services1Component } from './services1/services1.component';

@NgModule({
  declarations: [
    AppComponent,
    MyappComponent,
    NewcompComponent,
    SidebarComponent,
    ServicesComponent,
    Services1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
