import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private baseUrl = "https://localhost:7001/api/Customers/";
  constructor(private http: HttpClient) { }

  getCustomers() : Observable<any> {
    return this.http.get(this.baseUrl+"GetCustomers")
    .pipe((result: any) => {
      return result;
    });
  }

  getCustomer(id : number) : Observable<any> {
    return this.http.get(this.baseUrl + "GetCustomer/" + id)
    .pipe((result: any) => {
      return result;
    })
  }

  removeCustomer(id: number) : Observable<any> {
    const options = {
      'Content-Type': 'application/json'
    }
    return this.http.delete(this.baseUrl + "DeleteCustomer/"+id)
    .pipe((result: any) => {
      return result;
    })
  }

  addCustomer(customer: any) : Observable<any> {
    return this.http.post(this.baseUrl + "AddCustomer",customer)
    .pipe((result: any) => {
      return result;
    })
  }

  updateCustomer(customer: any) : Observable<any> {
    return this.http.post(this.baseUrl + "UpdateCustomer", customer)
    .pipe((result: any) => {
      return result;
    })
  }

  updateSingleCustomer(customer: any) : Observable<any> {
    return this.http.post(this.baseUrl + "UpdateSingleCustomer", customer)
    .pipe((result: any) => {
      return result;
    })
  }

}
