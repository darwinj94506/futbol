import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

import { Equipo } from '../models/equipo.model';
import{UserService} from './user.service';


@Injectable()
export class EquipoService {
  public url: string;
  public token;
  
  constructor(private _http: Http, private _US:UserService) {
    this.url = GLOBAL.url;
    this.token=_US.getToken();
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

  addPersonalAEquipo(idPersonal,idEquipo){
    // let params=JSON.stringify(equipo_to_update);
    let params={"personal_equipo":idPersonal};
    let headers=new Headers({
      'Content-Type':'application/json',
      'Authorization':this.token
    });
    return this._http.put(this.url+'equipo/agregarPERSONAL/'+idEquipo,params,{headers:headers})
                                                                    .map(res=>res.json());

  }

}
