import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ver-temporada',
  templateUrl: './ver-temporada.component.html',
  styleUrls: ['./ver-temporada.component.css']
})
export class VerTemporadaComponent implements OnInit {

  @Output() notify: EventEmitter <boolean> = new EventEmitter <boolean>();
  @Input('valor') mostrar_formualrio_nuevo: boolean;

  constructor() { }

  ngOnInit() {
  }

  cerrar_formulario(event){
    this.notify.emit(false);
  }

}
