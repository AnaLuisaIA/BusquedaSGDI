import { Component } from '@angular/core';
import { BusquedaService } from './services/busqueda.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `<app-busqueda></app-busqueda>`,
  styleUrls: ['./app.component.css'],
  providers: [BusquedaService]
})
export class AppComponent {
  title = 'app works!';
}
