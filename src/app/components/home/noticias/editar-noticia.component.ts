import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-editar-noticia',
  templateUrl: './agregar-noticia.component.html'
})
export class EditarNoticiaComponent implements OnInit {
  public title:string;
  
  constructor() {  
    this.title="Editar noticia";
  }

  ngOnInit() { }

}
