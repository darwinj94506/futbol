import { Component, OnInit } from '@angular/core';
import{Personal} from '../../../models/personal.model';
@Component({
  selector: 'app-nuevo-personal',
  templateUrl: './nuevo-personal.component.html',
  styleUrls: ['./nuevo-personal.component.css']
})
export class NuevoPersonalComponent implements OnInit {
  public personal:Personal;
  constructor() {
    this.personal=new Personal('','','',null,'01/02/2000',0,0,0,null,'',null,true);
    console.log(this.personal.fecha_nacimiento_personal);
   }

  ngOnInit() {
  }

}
