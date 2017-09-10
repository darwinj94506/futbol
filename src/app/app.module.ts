import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PdfViewerComponent } from 'ng2-pdf-viewer';



import { AppComponent } from './app.component';
//Componentes 
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

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
// import {SharedModule} from './shared-module/shared.module';

//servicios
import{UserService} from './services/user.service';
import{NoticiaService} from './services/noticia.service';
import {EquipoService} from './services/equipo.service';
import {TemporadaService} from './services/temporada.service';
import {PersonalService} from './services/personal.service';


//rutas
import{RoutingModule} from './app.routing';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { EstadiosComponent } from './components/estadios/estadios.component';
import { ReglamentoComponent } from './components/reglamento/reglamento.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { NuevoPersonalComponent } from './components/jugadores/nuevo-personal/nuevo-personal.component';
import { SeccionEquipoComponent } from './components/jugadores/seccion-equipo/seccion-equipo.component';
import { SeccionPersonalEquipoComponent } from './components/jugadores/seccion-personal-equipo/seccion-personal-equipo.component';
import { ListaTemporadaComponent } from './components/temporada/lista-temporada/lista-temporada.component';
import { VerTemporadaComponent } from './components/temporada/ver-temporada/ver-temporada.component';
import { EditarTemporadaComponent } from './components/temporada/ver-temporada/editar-temporada.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent,
    HomeComponent,
    TablaPosicionesComponent,
    VerNoticiasComponent,
    SliderComponent,
    EditarNoticiaComponent,
    AgregarNoticiaComponent,
    EquiposComponent,
    CalendarioComponent,
    TemporadaComponent,
    FooterComponent,
    NavbarComponent,
    CategoriasComponent,
    EstadiosComponent,
    ReglamentoComponent,
    JugadoresComponent,
    NuevoPersonalComponent,
    SeccionEquipoComponent,
    SeccionPersonalEquipoComponent,
    ListaTemporadaComponent,
    VerTemporadaComponent,
    EditarTemporadaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,  
    FormsModule,  
    // SharedModule,
    RoutingModule
  
  ],
  providers: [UserService,NoticiaService,EquipoService,TemporadaService,PersonalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
