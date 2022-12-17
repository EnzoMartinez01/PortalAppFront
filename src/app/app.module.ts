import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './component/navbar/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { ListarclientesComponent } from './pages/listarclientes/listarclientes.component';
import { ModuloadministrativoComponent } from './pages/moduloadministrativo/moduloadministrativo.component';
import { BienvenidoComponent } from './pages/moduloadministrativo/bienvenido/bienvenido.component';
import {MatDividerModule} from '@angular/material/divider';
import { SliderbarComponent } from './pages/moduloadministrativo/sliderbar/sliderbar.component';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './pages/moduloadministrativo/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CategoriasComponent } from './pages/moduloadministrativo/categorias/categorias.component';
import { AgregarCategoriaComponent } from './pages/moduloadministrativo/agregar-categoria/agregar-categoria.component';
import { ExamenComponent } from './pages/moduloadministrativo/examen/examen.component';
import { AgregarExamenComponent } from './pages/moduloadministrativo/agregar-examen/agregar-examen.component';
import { PreguntaComponent } from './pages/moduloadministrativo/pregunta/pregunta.component';
import { AgregarPreguntaComponent } from './pages/moduloadministrativo/agregar-pregunta/agregar-pregunta.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { ListaestudianteComponent } from './pages/moduloadministrativo/listaestudiante/listaestudiante.component';
import { ExamenuserComponent } from './pages/moduloadministrativo/examenuser/examenuser.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ListarclientesComponent,
    ModuloadministrativoComponent,
    BienvenidoComponent,
    SliderbarComponent,
    DashboardComponent,
    ProfileComponent,
    CategoriasComponent,
    AgregarCategoriaComponent,
    ExamenComponent,
    AgregarExamenComponent,
    PreguntaComponent,
    AgregarPreguntaComponent,
    ListaestudianteComponent,
    ExamenuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
