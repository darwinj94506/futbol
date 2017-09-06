import { Injectable } from '@angular/core';
import{HttpModule,Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import{Observable} from 'rxjs/Observable';
import{GLOBAL} from './global';

@Injectable()
export class UserService {
  public url:string;
  public identity;
  public token;

  constructor(private _http:Http) { 
    this.url=GLOBAL.url;    
  }

  register(user_to_register) {
    let params=JSON.stringify(user_to_register);
    let headers=new Headers({'Content-Type':'application/json'});
    return this._http.post(this.url+'usuario/saveUser',params, {headers:headers})
                      .map( res => res.json());
    }

  signup(user_to_login,gettoken=null){
    if(gettoken !=null){
      user_to_login.gethash=gettoken;
    }
    let params=JSON.stringify(user_to_login);
    let headers = new Headers({'Content-Type':'application/json'});
    return this._http.post(this.url+'usuario/login',params,{headers:headers})
                    .map(res=>res.json());
  }
  
  getIdentity(){
    let identity=JSON.parse(localStorage.getItem('identity'));
    if(identity!="undefined"){
      this.identity=identity;
    }else{
      this.identity=null;
    }
    return this.identity;
  }

  getToken(){
    let token=localStorage.getItem('token');
    if(token!="undefined"){
      this.token=token;
    }else{
      this.token=null;
    }
    return this.token;
  }
}
