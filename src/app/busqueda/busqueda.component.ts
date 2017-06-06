import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../services/busqueda.service';
import { Documento } from '../../models/Documento';

@Component({
  moduleId: module.id,
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  documentos: Documento[];
  documentosFilter: any;
  constructor(private busquedaService:BusquedaService) {
    this.busquedaService.obtenerDocumentos()
      .subscribe(documentos => {
        this.documentos = documentos;
      });
    this.documentosFilter = { "folio": ''};
  }

  ngOnInit() {
  }

}
