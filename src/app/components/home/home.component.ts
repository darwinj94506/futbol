import { Component, OnInit } from '@angular/core';
import{SliderComponent}from './slider/slider.component';
import{AgregarNoticiaComponent} from './noticias/agregar-noticia.component';
import{TablaPosicionesComponent} from './tabla-posiciones/tabla-posiciones.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  verTabla:boolean=false;
  constructor() { }


  verTablaPosiciones(event){
    this.verTabla=event;
    console.log(event);
  }

  ngOnInit() {
  }

}
