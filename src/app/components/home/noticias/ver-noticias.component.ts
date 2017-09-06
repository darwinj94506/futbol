import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ver-app-noticias',
  templateUrl: './ver-noticias.component.html',  
})
export class VerNoticiasComponent implements OnInit {
  


  @Output() mostrar=new EventEmitter();
  verNoticiaNueva:boolean=true;
  constructor() {    
   }

  ngOnInit() {
  }
  emitirEvento(){
    this.mostrar.emit({
      'verNoticiaNueva':this.verNoticiaNueva
    });
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
