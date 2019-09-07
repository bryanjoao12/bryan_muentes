import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {Response} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion(user:string, password:string){
    this.loginService.login().subscribe(
      (data: Response) =>{
        var user = JSON.parse(JSON.stringify(data));
        var validacion = false;
        user.forEach((usr) => {
          if(usr.user ===user && usr.password === user ){
            validacion = true;
          }
        });
        validacion ? this.router.navigate(['principal']) : alert('Credenciales inválidas');
      }
    )
  }
}
