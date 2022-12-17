import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class ListaestudianteService {

  constructor(private http:HttpClient) { }

  public listarEstudiantes(){
    return this.http.get(`${urlbase}/usuario/listarUsuario`,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})});
    }
  }

