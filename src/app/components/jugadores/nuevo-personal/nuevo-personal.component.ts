import { Component, OnInit } from '@angular/core';
import{Personal} from '../../../models/personal.model';
import{PersonalService} from '../../../services/personal.service';
import { GLOBAL } from '../../../services/global';
import {UserService} from '../../../services/user.service'

@Component({
  selector: 'app-nuevo-personal',
  templateUrl: './nuevo-personal.component.html',
  styleUrls: ['./nuevo-personal.component.css']
})
export class NuevoPersonalComponent implements OnInit {
  public personal:Personal;
  public fileSuccess:Boolean;
  public url: string;
  public srcH:any;
  public identity;
  public token;
  public filesToUpdate : Array<File>;
  
  // public btnGuardarNoticia:boolean=true;
  // public btnUpdateNoticia:boolean=false;

  constructor(private _PS:PersonalService, private _US:UserService) {
    this.personal=new Personal('','','',null,'',0,0,0,null,'','',true);
    console.log(this.personal.fecha_nacimiento_personal);

    this.url = GLOBAL.url;
    this.fileSuccess=false;
    this.identity = this._US.getIdentity();
    this.token = _US.getToken();
   }

  ngOnInit() {
    // this.srcH=this.url+'personal/get-image-noticia/default.jpg';   
    
  }

  guardarPersonal(){
    this._PS.addPersonal(this.url+'personal/guardar',this.personal,this.filesToUpdate,this.token,'image')
      .then(response=>{
        if(response){
          alert("personal creado");
        }else{
          alert("algo salio muy mal :(");
        }
      });
  }

}
