import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { AuthGuard } from './Components/auth.guard/auth-guard.service';
import { CustomerAccountSettingsComponent } from './Components/customer-account-settings/customer-account-settings.component';
import { CustomerPriceComponent } from './Components/customer-price/customer-price.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard]},
  { path: 'customer/account', component: CustomerAccountSettingsComponent, canActivate: [AuthGuard]},
  { path: 'price/customer', component: CustomerPriceComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
