import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Componentes 
import { HomeComponent } from './components/home/home.component';
import { TablaPosicionesComponent } from './components/home/tabla-posiciones/tabla-posiciones.component';
import { VerNoticiasComponent } from './components/home/noticias/ver-noticias.component';
import { EditarNoticiaComponent } from './components/home/noticias/editar-noticia.component';
import { AgregarNoticiaComponent } from './components/home/noticias/agregar-noticia.component';

import { SliderComponent } from './components/home/slider/slider.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { TemporadaComponent } from './components/temporada/temporada.component';

//modulo creado
import {SharedModule} from './shared-module/shared.module';

//rutas
import{RoutingModule} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaPosicionesComponent,
    VerNoticiasComponent,
    SliderComponent,
    EditarNoticiaComponent,
    AgregarNoticiaComponent,
    EquiposComponent,
    CalendarioComponent,
    TemporadaComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
