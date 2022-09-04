import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PriceService } from '../services/price.service';

@Component({
  selector: 'app-customer-price',
  templateUrl: './customer-price.component.html',
  styleUrls: ['./customer-price.component.css']
})
export class CustomerPriceComponent implements OnInit {

  prices: any[] = [];
  
  constructor(private priceService: PriceService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.priceService.getPrices("").subscribe(data => {
      this.prices = this.convertData(data);
    });
  }

  convertData(data: any) : any[]
  {
    data.forEach((value: any) => {
      value.datePrice = this.datePipe.transform(value.datePrice, "dd/MM/yyyy");
      switch(value.status_) {
        case 0: 
          value['statusString'] = 'Accepted';
          break;
        case 1:
          value['statusString'] = 'Pending';
          break;
        case 2:
          value['statusString'] =  'Cancelled';
          break;
        case 3:
          value['statusString'] = 'Create';
          break; 
        default:
          value['statusString'] = 'Unknown';
          break;
      };
    });
    return data;
  }

}
