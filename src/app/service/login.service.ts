import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<Boolean>;

  constructor(private httpClient:HttpClient) { }
  public generartoken(dataLogin:any){
    return this.httpClient.post(`${urlbase}/autenticacion/generartoken`,dataLogin);
  }

  public loginuser(token:any){
    localStorage.setItem('token', token);
    return true;
  }

  public getCurrentUser(){
    return this.httpClient.get(`${urlbase}/autenticacion/userlogin`,
    {headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})});
  }
  public gettoken(){
    localStorage.getItem('token');
    return true;
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user))
  }

  public getUser(){
    let userStr = localStorage.getItem('user');

    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return null;
  }
  public islogin(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == null || tokenStr == undefined || tokenStr == ""){
      return false;
    }else{
      return true;
    }
  }


  public getUserRol(){
    let userrol = this.getUser();
    return userrol.authorities[0].authority;
  }
}
