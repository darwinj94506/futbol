import { Component, OnInit } from '@angular/core';
import { NuevoPersonalComponent } from './nuevo-personal/nuevo-personal.component';
import { SeccionEquipoComponent } from './seccion-equipo/seccion-equipo.component';
import { SeccionPersonalEquipoComponent } from './seccion-personal-equipo/seccion-personal-equipo.component';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
