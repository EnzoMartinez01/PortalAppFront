import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoginEst = false;
  user:any = null;

  constructor(private login:LoginService) { }

  ngOnInit(): void {
    this.isLoginEst = this.login.islogin();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(dato => {
      this.isLoginEst = this.login.islogin();
      this.user = this.login.getUser();
      console.log(this.isLoginEst);
    });
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
