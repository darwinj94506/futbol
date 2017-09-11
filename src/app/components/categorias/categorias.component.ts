import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TemporadaService } from '../../services/temporada.service';
import { UserService } from '../../services/user.service';

import { GLOBAL } from '../../services/global';

import { Categoria } from '../../models/categoria.model';
import { Temporada } from '../../models/temporada.models';

import swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  
  public mostrar_formulario_inicial = false;
  public temporada_actual: Temporada;
  public url: string;

  public titulo= 'Nueva Categoria';
  public categorias: Categoria[];
  public categoria: Categoria;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _temporadaService: TemporadaService
  ) {
    this.url = GLOBAL.url;
    this.categoria = new Categoria('',0,'','',false,['']);
   }

  ngOnInit() {
    this.obtenerTemporadas();
  }

  obtenerTemporadas() {
    this._temporadaService.getTemporadas().subscribe(
      response => {
        if (!response) {
          // this.validarTemporadas = false;
        } else {
          response.forEach(element => {
            if ( element.estado_temporada ) {
              this.temporada_actual = element;
              console.log(this.temporada_actual);
              this.mostrar_formulario_inicial = true;
            }
          });
        }
      },
      error => {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          var body = JSON.parse(error._body);
          console.log(body);
        }
      }
    );
  }

}
