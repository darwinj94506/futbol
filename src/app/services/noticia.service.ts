import { Injectable } from '@angular/core';
import{HttpModule,Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import{Observable} from 'rxjs/Observable';
import{GLOBAL} from './global';
@Injectable()
export class NoticiaService {
  public url:string;
  constructor(private _http:Http) { 
    this.url=GLOBAL.url;
  }

  //Listar
  listar(page){
    let headers=new Headers({'Content-Type':'application/json'});
    return this._http.get(this.url+'/noticia/lista/'+page, {headers:headers})
    .map( res => res.json());;    
  }



}
