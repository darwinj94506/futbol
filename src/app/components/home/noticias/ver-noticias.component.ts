import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Noticia} from '../../../models/noticia.model';
import {NoticiaService} from '../../../services/noticia.service'
import{GLOBAL} from '../../../services/global';
import swal from 'sweetalert2';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-ver-noticias',
  templateUrl: './ver-noticias.component.html',  
})

export class VerNoticiasComponent implements OnInit {
  
  public url:string;
  //Declarar modelos 
  public noticiaNueva:Noticia;
  public noticia:Noticia;  
  //Variables de paginación
  public next_page;
  public prev_page;
  public pagina=1;

  @Output() mostrar=new EventEmitter();
  verNoticiaNueva:boolean=true;

	constructor(    		    
    private _noticiaservice : NoticiaService
	){
    this.pagina=1;
    this.next_page=1;
    this.prev_page=1; 
    this.url=GLOBAL.url;           		    
	}

	ngOnInit(){		 
    this.traerTresNoticias(this.pagina);
  }

  emitirEvento(elementoSeleccionado:string, noticia=null){
      this.mostrar.emit({
        'mensaje':{
          'componente':elementoSeleccionado,
          'noticiaEditar':noticia
        }
      });
  }
  
  sumar(){
    this.pagina = this.pagina+1;
    console.log(this.pagina);
    this.traerTresNoticias(this.pagina);
  }
  restar(){
    this.pagina = this.pagina-1;
    if(this.pagina == 0){
      this.pagina=1;
    }
    console.log(this.pagina);
    this.traerTresNoticias(this.pagina);
  }

  getNoticias(page){
    if(!page){
        page = 1;
    }else{
        //this.next_page = page+1;
        //this.prev_page = page-1;
        //controlar page negativo

        if(this.prev_page == 0){
            this.prev_page=1;
        }
    }
    this.traerTresNoticias(page);

  }


  traerTresNoticias(page){
    console.log(page)
              this._noticiaservice.getNoticias(page).subscribe(
              response => {
                  console.log(response);
                  if (!response.mensaje) {
                      console.log("No hay Noticias Creadas");
                      //this._router.navigate(['/']);
                  } else {
                      this.noticia = response.mensaje;                      
                      console.log("1"+response.mensaje);
                      response.mensaje.forEach((element,i) => {                                                                 
                         this.noticia[i].image=this.url+'noticia/get-image-noticia/'+element.image;
                      });
                  
                      let tamaño = response.mensaje.length;
                      if(tamaño == 0){
                        this.pagina=page-2;
                        console.log("NO HAY MAS Noticias");
                      }
                      console.log(this.noticia);
                      console.log("Tamaño del Vector: "+tamaño);
                  }

              },
              error => {
                  var errorMessage = <any>error;
                  if (errorMessage != null) {
                      // var body = JSON.parse(error._body);
                      //this.alertMessage = body.message;
                      console.log(error);
                  }
              }
      )
  }


  eliminarNoticia(){
    console.log("Eliminando...");
    swal({
      title: '¿Está usted seguro?',
      text: "¡Usted no será capaz de revertir esto!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar Noticia!'
    }).then(function () {

      swal(
        '¡Eliminado!',
        'La noticia ha sido eliminada con exito.',
        'success'
      )
    })
  }

}
