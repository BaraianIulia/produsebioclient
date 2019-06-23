import {Component, OnInit} from '@angular/core';
import {ProduseService} from '../serviceProduse/produse.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private currentUser: any;
  private currentFunction: any;

  constructor(public produseService: ProduseService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentFunction = JSON.parse(localStorage.getItem('currentFunction'));
  }

  ngOnInit() {
    this.produseService.getCartItems();
  }

  buyProductsFromCart() {
    this.produseService.buyProductsFromCart();

  }

  deleteProductFromCart(item) {
    console.log('id-ul este' + item);
    this.produseService.deleteProductFromCart(item);
  }

}
