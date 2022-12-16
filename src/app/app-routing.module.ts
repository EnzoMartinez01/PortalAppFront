import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ListarclientesComponent } from './pages/listarclientes/listarclientes.component';
import { ModuloadministrativoComponent } from './pages/moduloadministrativo/moduloadministrativo.component';
import { BienvenidoComponent } from './pages/moduloadministrativo/bienvenido/bienvenido.component';
import { DashboardComponent } from './pages/moduloadministrativo/dashboard/dashboard.component';
import { SliderbarComponent } from './pages/moduloadministrativo/sliderbar/sliderbar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CategoriasComponent } from './pages/moduloadministrativo/categorias/categorias.component';
import { AgregarCategoriaComponent } from './pages/moduloadministrativo/agregar-categoria/agregar-categoria.component';
import { ExamenComponent } from './pages/moduloadministrativo/examen/examen.component';
import { AgregarExamenComponent } from './pages/moduloadministrativo/agregar-examen/agregar-examen.component';
import { PreguntaComponent } from './pages/moduloadministrativo/pregunta/pregunta.component';
import { AgregarPreguntaComponent } from './pages/moduloadministrativo/agregar-pregunta/agregar-pregunta.component';


const routes: Routes = [
  {path:'', component: HomeComponent,pathMatch:'full'},
  {path:'login', component: LoginComponent,pathMatch:'full'},
  {path:'signup', component: SignupComponent,pathMatch:'full'},
  {path:'listarClientes', component: ListarclientesComponent,pathMatch:'full'},
  {path:'moduloAdmin', component: ModuloadministrativoComponent,pathMatch:'full'},
  {path:'profile', component: ProfileComponent,pathMatch:'full'},
  {path:'admin',component:DashboardComponent,
  children:[
    {
      path:'',component:BienvenidoComponent
    },
    {
      path:'slider',component:SliderbarComponent
    },
    {
      path:'categoria-view',component:CategoriasComponent
    },
    {
      path:'categoria-add',component:AgregarCategoriaComponent
    },
    {
      path:'examen-view',component:ExamenComponent
    },
    {
      path:'examen-add',component:AgregarExamenComponent
    },
    {
      path : 'pregunta-view/:examenId/:titulo' ,component : PreguntaComponent, 
    },
    {
      path : 'pregunta-add/:examenId/:titulo' ,component : AgregarPreguntaComponent, 
    },
    {
      path:'profile', component: ProfileComponent,pathMatch:'full'
    },
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
