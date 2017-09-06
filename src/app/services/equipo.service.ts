import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

import { Equipo } from '../models/equipo.model';

@Injectable()
export class EquipoService {
  public url: string;
  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  getEquipos() {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this._http.get(this.url + 'equipo/listartodos',{headers: headers})
      .map(res => res.json());

  }
  
  addEquipo( url: string, params: Equipo, files:Array<File>, token: string, name: string){   
    return new Promise(function(resolve,reject) {
      //simular el comportamiento de un formulario.
      var formData : any = new FormData();
      var xhr = new XMLHttpRequest();
      //recorrer los ficheros que hay en la base de datos
      for(var i = 0;i < files.length;i++) {
          formData.append(name, files[i], files[i].name);
      }
      for (var key in params) {
        console.log(key);
        formData.append(key,params[key]); 
      }      
      xhr.onreadystatechange = function() {
          if(xhr.readyState == 4) {
              if(xhr.status ==200) { resolve(JSON.parse(xhr.response)); } 
              else { reject(xhr.response); }
          }
      }
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);
      }); 
  }

}
