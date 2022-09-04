import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerAccountService } from '../services/customer-account.service';
import { CustomerService } from '../services/customer.service';
import { PriceService } from '../services/price.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: any[] = [];

  isAddNewCustomerOpen: boolean = false;
  isModifyCustomerOpen: boolean = false;

  customer: any = {
    id: '',
    name: '',
    surname: '',
    price: ''
  }

  constructor(private customerService : CustomerService, private customerAccountService: CustomerAccountService,
    private router: Router, private priceService: PriceService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    })
  }

  showCustomerForm() {
    this.clearCustomer();
    this.isModifyCustomerOpen = false;
    this.isAddNewCustomerOpen = true;
  }

  modifyCustomer(customer: any)
  {
    this.customer.id = customer.id;
    this.customer.name = customer.name;
    this.customer.surname = customer.surname;
    this.customer.price = customer.price;


    this.isAddNewCustomerOpen = false;
    this.isModifyCustomerOpen = true;
  }

  removeCustomer(customer: any)
  {
    this.customerService.removeCustomer(customer.id).subscribe(data => {
      this.customers = data;
    });
  }

  private clearCustomer()
  {
    this.customer.id = '';
    this.customer.name = '';
    this.customer.surname = '';
    this.customer.price = '';
  }

  sendCustomerRequest() {
    if(this.isAddNewCustomerOpen)
    {
      this.customerService.addCustomer(this.customer).subscribe(data => {
        this.customers = data;
      });
    }
    if(this.isModifyCustomerOpen)
    {
      this.customerService.updateCustomer(this.customer).subscribe(data => {
        this.customers = data;
      });
    }

  }

  accountSettings(customer: any) {
    this.customerAccountService.setCustomer(customer);
    this.router.navigate(["/customer/account"]);
  }

  showCustomerPrices(customer: any) {
    this.priceService.setCustomer(customer);
    this.router.navigate(["/price/customer"]);
  }


}
