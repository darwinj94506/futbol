import { Component,DoCheck, OnInit } from '@angular/core';
import{ UserService } from '../../services/user.service';
import{ User } from '../../models/user.model';
import{ Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  public formulario_equipo = true;
  public nombre_escudo = "Imagen";
  public identity;
  public token;

  constructor(
    private _userService: UserService,
    private _route:ActivatedRoute, 
    private _router:Router) {

   }

  ngOnInit() {
  }

  ngDoCheck(){
    this.identity=this._userService.getIdentity();
    this.token = this._userService.getToken();
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





 
 
