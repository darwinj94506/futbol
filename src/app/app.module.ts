import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{SharedModule} from './shared-module/shared.module';
import { HomeComponent } from './components/home/home.component';
import { TablaPosicionesComponent } from './components/home/tabla-posiciones/tabla-posiciones.component';
import { NoticiasComponent } from './components/home/noticias/noticias.component';
import { SliderComponent } from './components/home/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaPosicionesComponent,
    NoticiasComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
