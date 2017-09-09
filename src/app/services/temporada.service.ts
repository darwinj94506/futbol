import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';
import { Observable } from 'rxjs/Observable';

import {Temporada} from '../models/temporada.models';

@Injectable()
export class TemporadaService {
  public url: string;
  constructor(private _http: Http){ 
    this.url = GLOBAL.url;
  }

  getTemporadas(){
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this._http.get(this.url + 'temporada/',{headers: headers})
    .map(res => res.json());
  }

  addTemporada( url: string, params: Temporada, files:Array<File>, token: string, name: string){   
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
