import { Component, OnInit } from '@angular/core';

import { Estadio } from '../../models/estadio.model';

@Component({
  selector: 'app-estadios',
  templateUrl: './estadios.component.html',
  styleUrls: ['./estadios.component.css']
})
export class EstadiosComponent implements OnInit {

  public titulo = 'Agregar Nuevo Estadio';
  public estadio_nuevo: Estadio;
  constructor() { 
    this.estadio_nuevo = new Estadio('', '', '', '', '' , true);
  }

  ngOnInit() {
  }

}
