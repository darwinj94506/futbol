import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temporada',
  templateUrl: './temporada.component.html',
  styleUrls: ['./temporada.component.css']
})
export class TemporadaComponent implements OnInit {

  public ver_formualrio = false;

  constructor() { }

  ngOnInit() {
  }

  onNotifyClicked(data){
    this.ver_formualrio = data;
    console.log(data);
  }
  onNotifyClicked2(data){
    this.ver_formualrio = data;
    console.log(data);
  }

}
