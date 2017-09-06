import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { EquipoService } from '../../services/equipo.service';
import { GLOBAL } from '../../services/global';

import { Equipo } from '../../models/equipo.model';

import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert2';



@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  public formulario_equipo = true;
  public url: string;

  public nombre_escudo = "Imagen";
  public filesToUpload: Array<File>;
  public identity;
  public token;

  heroes = [];

  public equipos: Equipo[];
  public nuevo_equipo: Equipo;
  public a:any;
  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _equipoService: EquipoService
  ) {
    this.url = GLOBAL.url;
    this.nuevo_equipo = new Equipo('','',this.a,this.a,'','','',this.a,true,this.a);
  }

  ngOnInit() {
    this.obtenerequipos();
  }

  ngDoCheck() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ver_registro_equipo(event) {
    this.formulario_equipo = false;
  }

  cancelar_registro_equipo(event) {
    this.formulario_equipo = true;
    this.nombre_escudo = "Imagen";
  }


  
  imagen(fileInput: any) {
    var files = fileInput.srcElement.files[0].name;
    this.nombre_escudo = files;
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(fileInput);
  }
  

  addHero() {
    let data = "valor"
    this.heroes.push(data);
  }
  deletHero() {
    this.heroes.pop();
  }

  obtenerequipos() {
    this._equipoService.getEquipos().subscribe(
      response => {
        if (!response.equiposEncontrados) {
          console.log(" La categoria no tiene Equipos ");
        } else {
          this.equipos = response.equiposEncontrados;
          console.log(this.equipos);
        }
      },
      error => {
        var errorMessage = <any>error;

        if (errorMessage != null) {
          var body = JSON.parse(error._body);
          //this.alertMessage = body.message;
          console.log(error);
        }

      });
  }

  guardarEquipo(){
    console.log(this.nuevo_equipo);
    this._equipoService.addEquipo(this.url+'equipo/guardar', this.nuevo_equipo,this.filesToUpload,this.token,'escudo_equipo')
    .then(response=>{ console.log(response); });
  }

}







