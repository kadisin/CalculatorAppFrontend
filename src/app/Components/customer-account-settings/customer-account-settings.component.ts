import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { CustomerAccountService } from '../services/customer-account.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-account-settings',
  templateUrl: './customer-account-settings.component.html',
  styleUrls: ['./customer-account-settings.component.css']
})
export class CustomerAccountSettingsComponent implements OnInit {


  customer: any;
  modifiedCustomer: any;

  account: any;
  modifiedAccount: any;

  accounts: any[] = [];

  isModifyCustomerFormVisible: boolean = false;
  isModifyAccountFormVisible: boolean = false;
  isAddNewAccountFormVisible: boolean = false;

  constructor(private customerAccountService : CustomerAccountService, private customerService : CustomerService,
    private router: Router, private accountService: AccountService) { }

  ngOnInit(): void {
    this.customer = this.customerAccountService.getCustomer()
    this.modifiedCustomer = {
      id: this.customer.id,
      name: this.customer.name,
      surname: this.customer.surname,
      price: this.customer.price
    };
    this.getAccountReferencedToCustomer();

    this.accountService.getAccounts().subscribe(data => {
      this.accounts = data;
    });

  }

  getAccountReferencedToCustomer() {
    this.customerAccountService.getAccountReferencesToCustomer().subscribe(data => {
      
      this.account = data;
      
      this.modifiedAccount = {
        id: this.account.id,
        name: this.account.name,
        login: this.account.login,
        password: this.account.password
      };

    });
    
  }

  showModifyCustomerForm()
  {
    this.isModifyCustomerFormVisible = true;
  }

  showModifyAccountForm()
  {
    this.isModifyAccountFormVisible = true;
  }

  removeCustomer() {
    this.customerService.removeCustomer(this.customer.id).subscribe(data => {
      this.router.navigate(["/customers"]);
    });
  }

  modifyCustomer() {
    if(this.modifiedCustomer.name != '')
    {
      this.customerService.updateSingleCustomer(this.modifiedCustomer).subscribe(data => {
        this.customer = data;
      });
    }
  }

  modifyAccount() {
    this.accountService.updateAccount(this.modifiedAccount).subscribe(data => {
      this.account = data;
    });

    
  }

  attachAccountToCustomer(account: any) {

    this.customerAccountService.attachAccountToCustomer(this.customer.id, account.id).subscribe(data => {
      this.account = data[0];
      this.modifiedAccount = data[0];
      this.customer.idAccount = this.account.id;
    });
  }

  showNewAccountForm() {
    this.isAddNewAccountFormVisible = true;
    this.modifiedAccount = {
      id: '',
      name: '',
      login: '',
      password: ''
    };
  }

  addNewAccount() {
    console.log(this.modifiedAccount);
    this.accountService.addAccount(this.modifiedAccount).subscribe(data => {
      this.accounts = data;
    });
  }

}
