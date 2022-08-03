import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  public cartItemList: any = [];

  constructor() {}
  clothesDetails = [
    {
      id: 1,
      clothesName: 'Rolex watch ',
      clothesType: 'men',
      clothesPrice: 10000,
      clothesImg:
        'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 2,
      clothesName: 'Basic t-shirt ',
      clothesType: 'men',
      clothesPrice: 15,
      clothesImg:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      id: 3,
      clothesName: 'Basic hoodie ',
      clothesType: 'uni',
      clothesPrice: 50,
      clothesImg:
        'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 3,
      clothesName: 'Sunglasses ',
      clothesType: 'women',
      clothesPrice: 30,
      clothesImg:
        'https://images.unsplash.com/photo-1502767089025-6572583495f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
  ];
  addToCart(product: any) {
    this.cartItemList.push(product);
    console.log(this.cartItemList);
  }

  removeItemFromCart(product: any) {
    console.log(product);
    this.cartItemList.map((a: any, index: any) => {
      if (product.id == a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    //this.cartItemList.next(this.cartItemList);
  }
  filterProduct(category: any, clothesData: any) {
    console.log('category:  ' + category);
    console.log('clothesData:  ' + clothesData);
    clothesData.filter((a: any) => {
      if (a.clothesType == category) return a;
    });
  }
  getCartItemList() {
    return this.cartItemList.asOvservable();
  }
  getTotalPrice() {
    let cartTotalWorth = 0;
    this.cartItemList.map((a: any) => {
      cartTotalWorth += a.clothesPrice;
    });
  }
}
