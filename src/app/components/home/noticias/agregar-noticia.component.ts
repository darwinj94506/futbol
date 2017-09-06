import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-noticia',
  templateUrl: './agregar-noticia.component.html'
})
export class AgregarNoticiaComponent implements OnInit {

  public srcH:any;
  constructor() { }

  ngOnInit() {
  }

  subirFileNoticia($event){
    this.readThis($event.target);
  }


  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0]; 
    var myReader:FileReader = new FileReader();
    let ctx=this;
    myReader.readAsDataURL(file);
    myReader.onloadend = function(e){
      // you can perform an action with readed data here      
      console.log(myReader.result);
      ctx.srcH=myReader.result;      
    }

    myReader.readAsText(file);
  }
}
