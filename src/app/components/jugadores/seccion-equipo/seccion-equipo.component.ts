import { Component, OnInit } from '@angular/core';
import{EquipoService} from '../../../services/equipo.service';
import { Equipo } from '../../../models/equipo.model';
@Component({
  selector: 'app-seccion-equipo',
  templateUrl: './seccion-equipo.component.html',
  styleUrls: ['./seccion-equipo.component.css']
})
export class SeccionEquipoComponent implements OnInit {

  public equipo:Equipo[];
  constructor(
       private _ES:EquipoService
  ) {
    //  this.equipo=new Equipo('','',0,'','','','',null,true,null);
   }

  ngOnInit() {
    //  this.equipo=this._ES.getEquipos();
     console.log(this._ES.getEquipos());
  }

}
