import { Component, OnInit } from '@angular/core';
import { TemporadaService } from '../../../services/temporada.service';
import { UserService } from '../../../services/user.service';
import { CategoriaService } from '../../../services/categoria.service';
import { FechaService } from '../../../services/fecha.service';
import * as _ from 'lodash';
import { Categoria } from '../../../models/categoria.model';
import { Fecha } from '../../../models/fecha.model';
import { Temporada } from '../../../models/temporada.models';
import swal from 'sweetalert2';
@Component({
  selector: 'app-tabla-posiciones',
  templateUrl: './tabla-posiciones.component.html',
  styleUrls: ['./tabla-posiciones.component.css']
})
export class TablaPosicionesComponent implements OnInit {
  public cClass:[any];
  public token;
  public temporada_actual: Temporada;
  public fecha:any;
  public plantilla:any;
  public fechaAgrupada:any;
  public fechaAgrupadaT1:any;
  public fechaAgrupadaT2:any;
  public fechaAux:any;
  public arrayCategoria = new Array();
  public categoriaSeleccionada:any;
  constructor(
    private _userService: UserService,
    private _temporadaService: TemporadaService,
    private _categoriaService: CategoriaService,
    private _fechaService: FechaService
  ) {    
    this.token = this._userService.getToken();          
   }

   ngOnInit() {
    this.obtenerTemporadas();
  }

  obtenerTemporadas() {
    this._temporadaService.getTemporadas().subscribe(
      response => {
        if (!response) {
          // this.validarTemporadas = false;
        } else {
          response.forEach(element => {
            if ( element.estado_temporada ) {
              this.temporada_actual = element;
              console.log(this.temporada_actual);              
            }
          });
        this.CategoriasTemporada(this.temporada_actual._id);
        }
      },
      error => {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          var body = JSON.parse(error._body);
          console.log(body);
        }
      }
    );
  }
  onClass(i){
    this.cClass[i]=i;
  }
  CategoriasTemporada(id:string){
    this._categoriaService.getCategorias().subscribe(
      response => {
        if (!response){
          console.log("No existen categorias");
        }else{
          let i=0;
          for (var index = 0; index < response.length; index++) {
            // console.log("alo 1 "+ response[index].id_temporada + "id: "+ id) ;
            if( response[index].id_temporada == id){
              console.log(" Id de la temporada en categoria "+response[index].id_temporada);
              this.arrayCategoria[i] = response[index];
              i++
            }
          }
          console.log(response);          
          console.log(this.arrayCategoria);
        }
      },
      error => {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          var body = JSON.parse(error._body);
          console.log(body);
        }
        });
  }
  onChangeCategoria(e){
    this.categoriaSeleccionada=e;
    this.obtenerCalendario(e);
  }
  
  // *ngFor="let fec of fechaAgrupada"
  obtenerCalendario(e){    
    if(e.target.selectedIndex!=0)
      {        
        console.log(e.target.selectedIndex);
        let index=e.target.selectedIndex-1;        
          this._fechaService.getFechaByIdCategoria(this.arrayCategoria[index]._id)
          .subscribe((res)=>{            
            if(res){
              this.fecha=res;
              this.fechaAgrupadaT1=JSON.stringify(this.fecha.fechasEncontradas[2]);

              // this.fechaAux=this.fecha.fechasEncontradas;
              console.log(":D");              
              // console.log(_.values(_.groupBy(this.fecha.fechasEncontradas,'n_fecha')));   

              //  let LongF=this.fechaAux.length;
              //  this.fechaAgrupadaT1=this.fechaAux.splice(0,LongF/2);          
              //  console.log(_.values(_.groupBy(this.fechaAux,'n_fecha')));
              //  console.log("##");
              //  console.log(_.values(_.groupBy(this.fechaAgrupadaT1,'n_fecha')));
              // console.log(this.fecha.fechasEncontradas);
              this.fechaAgrupada=_.values(_.groupBy(this.fecha.fechasEncontradas,'n_fecha'));
              console.log(this.fechaAgrupada);
              // console.log(a); 
              // this.fechaAgrupadaT1=_.values(_.groupBy(_.chunk(this.fecha.fechasEncontradas,2)[0],'n_fecha'));
              // console.log(_.values(_.groupBy(_.chunk(_.values(this.fecha.fechasEncontradas),2),'n_fecha')));
              // console.log(_.chunk(_.values(this.fecha.fechasEncontradas),2));
              // if(this.arrayCategoria[index].segunda_vuelta){
              //   this.fechaAgrupadaT2=_.values(_.groupBy(_.chunk(this.fecha.fechasEncontradas,2)[1],'n_fecha'));
              // }
              
              // console.log(_.values(_.groupBy(this.fecha.fechasEncontradas,'n_fecha'))[0]);
              // console.log(_.groupBy([{a:1,j:"j"},{a:2,j:"b"},{a:1,j:":D"}],'a'));
              // _.chain(this.standings)
              // .groupBy('division')
              // .toPairs()
              // .map(item => _.zipObject(['divisionName','divisionStandings'],item))
              // .value();
            }else{
              console.log("Fechas no encontradas");
            }
          },(err)=>{
            if(err.status==404){
              swal(
                'Calendario',
                '¡No existe un calendario para esta categoría.!',                
              )
            }else{
              swal(
                'Oops...',
                '¡Algo salio mal, pruebe despues de un momento!',
                'error'
              )
            }
                        
          });                   
            
      }else{
        console.log("No se ha seleccionado una categoria.");        
      }
  }

}
