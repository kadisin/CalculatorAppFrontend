import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {


  customer: any;

  private baseUrl: string =   "https://localhost:7001/api/Price/";
  constructor(private http: HttpClient) { }

  setCustomer(customer: any)
  {
    this.customer = customer;
  }

  getCustomer() {
    return this.customer;
  }

  getPrices(param: string) : Observable<any> {
    return this.http.get(this.baseUrl + "GetPrices/" + this.customer.id)
    .pipe((result: any) => {
      return result;
    });
  }

}
