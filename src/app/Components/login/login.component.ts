import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean | undefined;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(form: NgForm)
  {
    const credentials = {
      'login': form.value.username,
      'password': form.value.password
    }

    this.http.post("https://localhost:7001/api/auth/login", credentials)
    .subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt",token);
      this.invalidLogin = false;
      this.router.navigate(["/home"]);
    }, err => {
      this.invalidLogin = true;
    });

  }

  getToken() {
    return localStorage.getItem("jwt");
  }


}
