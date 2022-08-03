import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css'],
})
export class MenComponent implements OnInit {
  constructor(private service: OrderService) {}
  clothesData: any;
  filterCategory: any;
  ngOnInit(): void {
    this.clothesData = this.service.clothesDetails;
    this.filterProduct();
  }

  filterProduct() {
    console.log('clothesData:  ' + this.clothesData);
    this.clothesData.filter((a: any) => {
      console.log('a:  ' + a);
      if (a.clothesType == 'men') return a;
      console.log('a:  ' + a);
    });
  }
}
