import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model';
import {Noticia} from '../../../models/noticia.model';
import {NoticiaService} from '../../../services/noticia.service'
import {UserService} from '../../../services/user.service'
@Component({
  selector: 'app-agregar-noticia',
  templateUrl: './agregar-noticia.component.html'
})
export class AgregarNoticiaComponent implements OnInit {

  public srcH:any;
  public identity;
  public token;
  public title: string;
  public noticia_nueva: Noticia;
  constructor(private _US:UserService,						
		private _noticiaservice : NoticiaService
	){
		this.title = 'Nueva Noticia';
    this.identity = this._US.getIdentity();
    this.token = _US.getToken();
		this.noticia_nueva = new Noticia('','Nueva Noticia','Descripción','Observación','','assets/','',false);
	}

  ngOnInit() {
  }

  guardarNoticia(){
    console.log(this.identity);
    
      this.noticia_nueva.usuario = this.identity._id;
      console.log(this.noticia_nueva);
      //Guardar la Noticia:
        this._noticiaservice.addNoticia(this.token, this.noticia_nueva).subscribe(
        response => {
          
          if(!response.mensaje){
            //this.alertMessage = 'Error en el servidor';
            console.log("ERORO fatality");
          }else{
            //this.alertMessage = '¡El artista se ha creado correctamente!';
            //this.artist = response.artist;
            //this._router.navigate(['/editar-artista', response.artist._id]);
            console.log("Noticia Guardada");
          }
  
        },
        error => {
          var errorMessage = <any>error;
  
              if(errorMessage != null){
                var body = JSON.parse(error._body);
                //this.alertMessage = body.message;
  
                console.log(error);
              }
        }	
      );
  }


  subirFileNoticia($event){
    this.readThis($event.target);
  }


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
