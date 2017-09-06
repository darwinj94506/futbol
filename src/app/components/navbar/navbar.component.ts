import { Component, OnInit } from '@angular/core';
import{UserService} from '../../services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public verIniciarSesion:boolean=true;
  constructor(private _US:UserService) { }

  ngOnInit() {
  }

  // loguear(){
  //   this._US.signup()
  // }

}
