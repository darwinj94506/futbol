import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  public formulario_equipo = true;
  public nombre_escudo = "Imagen";
  constructor() { }

  ngOnInit() {
  }
  ver_registro_equipo(event){
    this.formulario_equipo = false;
  }
  cancelar_registro_equipo(event){
    this.formulario_equipo = true;
    this.nombre_escudo = "Imagen";
  }
  imagen(event){
    var files = event.srcElement.files[0].name;
    this.nombre_escudo = files;
    console.log(files);
  }
}





 
 
