import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-lista-temporada',
  templateUrl: './lista-temporada.component.html',
  styleUrls: ['./lista-temporada.component.css']
})
export class ListaTemporadaComponent implements OnInit {

  @Output() notify: EventEmitter <boolean> = new EventEmitter <boolean>();

  public ver_nuevo_formulario=false;

  constructor() { }

  ngOnInit() {
  }

  ver_formulario(event){
    this.notify.emit(true);
  }
}
