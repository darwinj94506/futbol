import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  public formulario_equipo = true;
  constructor() { }

  ngOnInit() {
  }
  ver_registro_equipo(event){
    this.formulario_equipo = false;
  }
  cancelar_registro_equipo(event){
    this.formulario_equipo = true;
  }
}




 
 
