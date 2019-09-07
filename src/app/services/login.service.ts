import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/Rx"

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(){
    return this.http.get("https://tienda-angular-2-3702c.firebaseio.com/.json")
      .map((res: Response) => res.json());
  }
}
