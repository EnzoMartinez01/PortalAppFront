import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public dataLogin={
    username: '',
    password: ''
  }

  constructor(private snack:MatSnackBar, private logService:LoginService, private router:Router) { }


  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.dataLogin);
    if(this.dataLogin.username.trim() == "" || this.dataLogin.username.trim() == null){
      this.snack.open("Debe ingresar un Usuario", 'Aceptar',{duration:3000})
      return;
    }
    if(this.dataLogin.password.trim() == "" || this.dataLogin.password.trim() == null){
      this.snack.open("Debe ingresar una Contraseña", 'Aceptar',{duration:3000})
      return;
    }

    this.logService.generartoken(this.dataLogin).subscribe(
      (data:any) => {
        console.log(data);
        this.logService.loginuser(data.token);
        this.logService.getCurrentUser().subscribe((user:any)=>{
          this.logService.setUser(user);
          console.log(user);
          
          
          if(this.logService.getUserRol() == "Administrador"){
            this.router.navigate(["admin"]);
            this.logService.loginStatusSubject.next(true);
          }else if(this.logService.getUserRol() == "Estudiante"){
            this.router.navigate(["/listarClientes"]);
            this.logService.loginStatusSubject.next(true);
          }
        }
        )
        Swal.fire('Iniciando sesión','Inicio de sesión correctamente','success');
      }
    )
  }

}
