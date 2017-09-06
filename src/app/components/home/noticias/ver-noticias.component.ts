import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-ver-noticias',
  templateUrl: './ver-noticias.component.html',  
})
export class VerNoticiasComponent implements OnInit {
  
  public noticias:string [] =['1','2','3'];

  @Output() mostrar=new EventEmitter();
  @Output() verEditar=new EventEmitter();
  
  constructor() {    
   }

  ngOnInit() {
  }

  emitirEvento(elementoSeleccionado:string){
    this.mostrar.emit({
      'componente':elementoSeleccionado
    });
  }

  // emitirEditarNoticia(){
  //   console.log("presionado emitraeditar");
  //   this.verEditar.emit({
  //     'verEditarNoticia':true
  //   });
  // }

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
