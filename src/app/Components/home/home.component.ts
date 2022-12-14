import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
  }

  isUserAuthenticated()
  {
    const token: string | null = localStorage.getItem("jwt");

    if(token && !this.jwtHelper.isTokenExpired(token))
    {
      return true;
    }
    else
    {
      return false;
    }
  }


  logOut(){
    localStorage.removeItem("jwt");
  }
}
