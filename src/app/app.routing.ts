import{NgModule} from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import{HomeComponent} from './components/home/home.component';
import{EquiposComponent} from './components/equipos/equipos.component';
import{TemporadaComponent} from './components/temporada/temporada.component';

// import{MainComponent} from './components/main/main.component';
// import{ListComponent} from './components/list/list.component';
// import{AddComponent} from './components/add/add.component';
// import{EditComponent} from './components/edit/edit.component';

// import{AdminGuard} from '../services/admin.guard';

const adminRoutes:Routes=[
  {path:'home',component:HomeComponent},    
  {path:'equipos',component:EquiposComponent},
  {path:'temporada',component:TemporadaComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports:[
    RouterModule.forRoot(adminRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule{}
