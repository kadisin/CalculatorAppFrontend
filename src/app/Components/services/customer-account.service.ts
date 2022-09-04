import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';


@Injectable({
  providedIn: 'root'
})
export class CustomerAccountService {


  customer: any = 
  {
    id: '',
    idAccount: '',
    name: '',
    surname: '',
    price: ''
  }

  account: any;
  baseUrl: string = 'https://localhost:7001/api/CustomerAccount/';


  constructor(private http: HttpClient, private customerService: CustomerService) { }


  public setCustomer(customer: any)
  {
    this.customer = customer;
  }

  public getCustomer()
  {
    return this.customer;
  }


  public getAccountReferencesToCustomer() : Observable<any>
  {
    const requestBody = {
      id: this.customer.id,
      idAccount: this.customer.idAccount
    }

    return this.http.post(this.baseUrl + 'GetAccountByCustomer', requestBody)
    .pipe((result: any) => {
      return result;
    });
  }

  public attachAccountToCustomer(idCustomer: number, idAccount: number) : Observable<any> {
    const body = {
      Id: idCustomer,
      IdAccount: idAccount
    }
    console.log(body);
    return this.http.post(this.baseUrl + "AttachAccountToCustomer", body)
    .pipe((result: any) => {
      return result;
    });

  }


}
