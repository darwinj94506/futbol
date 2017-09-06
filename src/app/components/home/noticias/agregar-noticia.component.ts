import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model';
import {Noticia} from '../../../models/noticia.model';
import {NoticiaService} from '../../../services/noticia.service'
import {UserService} from '../../../services/user.service'

import { GLOBAL } from '../../../services/global';
@Component({
  selector: 'app-agregar-noticia',
  templateUrl: './agregar-noticia.component.html'  
})
export class AgregarNoticiaComponent implements OnInit {
  public title:string;

  public fileSuccess:Boolean;
  public url: string;
  public srcH:any;
  public identity;
  public token;
  public noticia_nueva: Noticia;
  constructor(private _US:UserService,						
    private _noticiaservice : NoticiaService,    
	){
    this.url = GLOBAL.url;
    this.fileSuccess=false;
		this.title = 'Nueva Noticia';
    this.identity = this._US.getIdentity();
    this.token = _US.getToken();
		this.noticia_nueva = new Noticia('','','','','','','',false);
	}

  ngOnInit() {
  }

  guardarNoticia(){
    console.log(this.identity);
    
      this.noticia_nueva.usuario = this.identity._id;
      console.log(this.noticia_nueva);
      //Guardar la Noticia:
        this._noticiaservice.addNoticia(this.url+'noticia/save', this.noticia_nueva,this.filesToUpdate,this.token,'image')
        .then(response=>{ console.log(response); });      
  }

  public filesToUpdate : Array<File>;
  subirFileNoticia(fileInput : any){
      //si fueran check se podrian selecciones varios.
      this.filesToUpdate = <Array<File>>fileInput.target.files;
      this.readThis(fileInput.target);
      
  }
  // PREVISUALIZACION IMAGEN

  

  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0]; 
    var myReader:FileReader = new FileReader();
    let ctx=this;
    myReader.readAsDataURL(file);
    myReader.onloadend = function(e){
      // you can perform an action with readed data here      
      console.log(myReader.result);
      ctx.srcH=myReader.result;      
    }

    myReader.readAsText(file);
  }
}
