import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

import { Categoria } from '../models/categoria.model';

@Injectable()
export class CategoriaService {
  public url: string;
  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  getCategorias(){
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this._http.get(this.url + 'categoria/categorias',{headers: headers})
      .map(res => res.json());
  }

}
