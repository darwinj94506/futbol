import { Component, Input,OnInit } from '@angular/core';
import {Noticia} from '../../../models/noticia.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-editar-noticia',
  templateUrl: './agregar-noticia.component.html'
})
export class EditarNoticiaComponent implements OnInit {
  @Input() noticia_nueva:Noticia; //es la notica que me llega como parametro del compoennte padre
  public title:string;
  
  constructor() {  
    this.title="Editar noticia";
    this.noticia_nueva;
  }

  ngOnInit() { }

}
