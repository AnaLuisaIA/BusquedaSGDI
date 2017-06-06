import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
