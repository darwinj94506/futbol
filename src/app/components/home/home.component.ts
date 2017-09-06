import { Component, OnInit } from '@angular/core';
import{SliderComponent}from './slider/slider.component';
import{AgregarNoticiaComponent} from './noticias/agregar-noticia.component';
import{EditarNoticiaComponent} from './noticias/editar-noticia.component';
import { NgSwitch } from '@angular/common';
import{TablaPosicionesComponent} from './tabla-posiciones/tabla-posiciones.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public verElemento:string="tabla";
  public noticia_editar:any;
  constructor() { }
  
  mostrarElemento(event){
    this.verElemento=event.mensaje.componente;
    this.noticia_editar=event.mensaje.noticiaEditar;
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXX");
    console.log(this.noticia_editar);    
    console.log(event);
  }

  ngOnInit() {
  }

}
