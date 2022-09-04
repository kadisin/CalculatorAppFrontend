import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuPositions: any[] = ['Home','Login','Customers'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changePage(menuPosition: any) {
    let routerLink = '';
    if(menuPosition == 'Home')
    {
      routerLink = 'home';
    }
    if(menuPosition == 'Login')
    {
      routerLink = 'login';
    }
    if(menuPosition == 'Customers')
    {
      routerLink = 'customers';
    }
    this.router.navigate([routerLink]);
  }

}
