import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ver-app-noticias',
  templateUrl: './ver-noticias.component.html'
})
export class VerNoticiasComponent implements OnInit {

  @Output() mostrar=new EventEmitter();
  verNoticiaNueva:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  emitirEvento(){
    this.mostrar.emit({
      'verNoticiaNueva':this.verNoticiaNueva
    });
  }

}
