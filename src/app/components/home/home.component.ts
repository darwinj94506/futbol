import { Component, OnInit } from '@angular/core';
import{SliderComponent}from './slider/slider.component';
import{NoticiasComponent} from './noticias/noticias.component';
import{TablaPosicionesComponent} from './tabla-posiciones/tabla-posiciones.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
