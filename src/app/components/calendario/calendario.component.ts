import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  public generarSelectJugadoresGoles1: any;
  public generarSelectJugadoresTA1: any;
  public generarSelectJugadoresTR1: any;
  public generarSelectJugadoresGoles2: any;
  public generarSelectJugadoresTA2: any;
  public generarSelectJugadoresTR2: any;

  constructor() { }

  ngOnInit() {
  }

  generarGoles1(GOL1: number){
    this.generarSelectJugadoresGoles1 = new Array(GOL1);
  }
  generarTA1(TA1: number){
    this.generarSelectJugadoresTA1 = new Array(TA1);
  }
  generarTR1(TR1: number){
    this.generarSelectJugadoresTR1 = new Array(TR1);
  }
  generarGoles2(GOL2: number){
    this.generarSelectJugadoresGoles2 = new Array(GOL2);
  }
  generarTA2(TA2: number){
    this.generarSelectJugadoresTA2 = new Array(TA2);
  }
  generarTR2(TR2: number){
    this.generarSelectJugadoresTR2 = new Array(TR2);
  }

}
