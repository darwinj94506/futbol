import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';




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

//rutas
import{RoutingModule} from './app.routing';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { EstadiosComponent } from './components/estadios/estadios.component';
import { ReglamentoComponent } from './components/reglamento/reglamento.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';

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
    TemporadaComponent,
    FooterComponent,
    NavbarComponent,
    CategoriasComponent,
    EstadiosComponent,
    ReglamentoComponent,
    JugadoresComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,  
    FormsModule,  
    // SharedModule,
    RoutingModule
  
  ],
  providers: [UserService,NoticiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
