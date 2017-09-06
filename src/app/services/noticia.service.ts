import { Injectable } from '@angular/core';
import{HttpModule,Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import{Observable} from 'rxjs/Observable';
import{GLOBAL} from './global';

import {Noticia} from '../models/noticia.model';

@Injectable()
export class NoticiaService {
  public url:string;
  constructor(private _http:Http) { 
    this.url=GLOBAL.url;
  }


  //Nueva
  addNoticia( token, noticiaNueva : Noticia){
    let params = JSON.stringify(noticiaNueva);
    let headers = new Headers({
        'Content-Type':'application/json',
        'Authorization':token
    }) ;

    return this._http.post(this.url+'noticia/save',params,{headers:headers})
    .map(res => res.json());
    //return 'HOLA MUNDO SERVICIO ARTISTA';    
  }

  //Listar
  getNoticias(page){
    let headers = new Headers({
         'Content-Type':'application/json'  
    })
    let options = new RequestOptions({headers:headers});
    return this._http.get(this.url+'noticia/lista/'+page,options)
    .map(res => res.json());
  }


}
