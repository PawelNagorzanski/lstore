import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: OrderService) {}
  clothesData: any;
  ngOnInit(): void {
    this.clothesData = this.service.clothesDetails;
  }
  addToCart(item: any) {
    this.service.addToCart(item);
  }
}
