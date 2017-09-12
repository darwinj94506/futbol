import { Injectable } from '@angular/core';
import{HttpModule,Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import{Observable} from 'rxjs/Observable';
import{GLOBAL} from './global';

import {Categoria} from '../models/categoria.model';
@Injectable()
export class CategoriaService {
  public url:string;
  constructor(private _http:Http) { 
    this.url=GLOBAL.url;
  } 
  
  putEquipoInToCategoria(token,idCategoria,idEquipo:any) {
    let params=JSON.stringify(idEquipo);
    let headers = new Headers({
      'Content-Type':'application/json',
      'Authorization':token  
    })
    let options = new RequestOptions({headers:headers});
    return this._http.put(this.url+'categoria/agregarEquipo/'+idCategoria,params,options)
    .map(res => res.json());
  }

  pullEquipoInToCategoria(token,idCategoria,idEquipo:any) {
    let params=JSON.stringify(idEquipo);
    let headers = new Headers({
      'Content-Type':'application/json',
      'Authorization':token  
    })
    let options = new RequestOptions({headers:headers});
    return this._http.put(this.url+'categoria/quitarEquipo/'+idCategoria,params,options)
    .map(res => res.json());
  }

    //Listar
  getCategoria(){
    let headers = new Headers({
         'Content-Type':'application/json'  
    })
    let options = new RequestOptions({headers:headers});
    return this._http.get(this.url+'categoria/',options)
    .map(res => res.json());
  }
}