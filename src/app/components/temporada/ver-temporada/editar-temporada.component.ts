import { Component, DoCheck, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TemporadaService } from '../../../services/temporada.service';
import { UserService } from '../../../services/user.service';
import { GLOBAL } from '../../../services/global';

import { Temporada } from '../../../models/temporada.models';


import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-temporada',
  templateUrl: './ver-temporada.component.html',
  styleUrls: ['./ver-temporada.component.css']
})
export class EditarTemporadaComponent implements OnInit {

  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  // tslint:disable-next-line:no-input-rename
  @Input('temporadaParaEditar') temporada_nueva: Temporada;
  @Input('valor') mostrar_formualrio_nuevo: boolean;

  public pdfSubido: boolean;
  public pdf: any;

  public titulo = "Editar Temporada";
  public url: string;
  public filesToUpload: Array<File>;
  public identity;
  public token;

  //radio_button
  public estado_readio_button = true;

  public nombre_documento = "Reglamento";
  public validarTemporadas: boolean;
  public a: any;
  public temporadas: Temporada[];
  public temporada_actual: Temporada;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _temporadaService: TemporadaService) {
    this.url = GLOBAL.url;
    this.temporada_nueva;
  }

  ngOnInit() {
    this.obtenerTemporadas();
    console.log(this.temporada_nueva.url_reglamento_temporada);
  }

  ngDoCheck() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    if (this.temporada_nueva.url_reglamento_temporada != undefined) {
      this.pdfSubido = true;
      this.pdf = this.url + "temporada/get-pdf-temporada/" + this.temporada_nueva.url_reglamento_temporada;
      console.log(this.pdf);
    } else {
      this.pdfSubido = false;
    }
  }
  cerrar_formulario(event) {
    this.notify.emit(false);
  }

  imagen(fileInput: any) {
    var files = fileInput.srcElement.files[0].name;
    this.nombre_documento = files;
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(fileInput);
  }

  obtenerTemporadas() {
    this._temporadaService.getTemporadas().subscribe(
      response => {
        if (!response) {
          this.validarTemporadas = false;
        } else {
          this.validarTemporadas = true;
          this.temporadas = response;
          console.log(this.temporadas);
          this.temporadas.forEach(element => {
            if (element.estado_temporada) {
              this.temporada_actual = element;
              console.log(this.temporada_actual);
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

  rolSelect(estado){
    if(estado == 'true'){
      this.temporada_nueva.estado_temporada = true;
    }else{
      this.temporada_nueva.estado_temporada = false;
    }
	}

  updateTemporada() {
    console.log(this.temporada_nueva);
    if (this.temporada_nueva.estado_temporada == true) {
      console.log("actualizar la temporada actual cambiando el estado a false y despues guardar");
    } else {
      console.log('Actualizar normalmente');
      // this._temporadaService.updatetemporada(this.url + 'temporada/actualizar/' + id,
      //   this.temporada_nueva, this.filesToUpdate, this.token, 'url_reglamento_temporada')
      //   .then(response => {
      //     if (response) {
      //       this.notificacion.emit("Noticia actualizada");
      //       console.log(response);
      //       swal(
      //         '¡Modificado!',
      //         'Los cambios se guardaron con exito.',
      //         'success'
      //       )
      //     }
      //   }
      //   ).catch((e) => {
      //     swal(
      //       'Oops...',
      //       '¡Algo salio mal,no encontramos la noticia, pruebe despues de un momento!',
      //       'error'
      //     )
      //     console.log("La noticia no pudo ser actualizada, intente nuevamente.");
      //   });
    }
  }


}
