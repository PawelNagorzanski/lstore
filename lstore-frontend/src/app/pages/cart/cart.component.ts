import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  clothesData: any;
  constructor(private service: OrderService) {}

  ngOnInit(): void {
    this.clothesData = this.service.cartItemList;
  }
  removeItemFromCart(item: any) {
    this.service.removeItemFromCart(item);
  }
}
