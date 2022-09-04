import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }


  baseUrl: string = "https://localhost:7001/api/Account/"


  updateAccount(account: any) : Observable<any> {
    return this.http.post(this.baseUrl + "UpdateAccount", account)
    .pipe((result: any) => {
      return result;
    });
  }

  getAccounts() : Observable<any> {
    return this.http.get(this.baseUrl + "GetAccounts")
    .pipe((result: any) => {
      return result;
    });
  }

  addAccount(account: any) : Observable<any> {

    const body = {
      name: account.name,
      login: account.login,
      password: account.password
    };

    return this.http.post(this.baseUrl + "AddAccount", body)
    .pipe((result: any) => {
      return result;
    });
  }

}
