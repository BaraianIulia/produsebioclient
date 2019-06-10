import {Component, OnInit} from '@angular/core';
import {UserService} from '../serviceUser/user.service';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  private currentUser;
  private currentFunction;

  constructor(private userservice: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentFunction = JSON.parse(localStorage.getItem('currentFunction'));
  }

  ngOnInit() {
  }

  redirectToLoginPage() {
    location.href = '/login';
  }

  redirectToMyProfilePage() {
    location.href = '/myprofile/' + this.currentUser.nume + this.currentUser.prenume;
  }

  redirectToCartPage() {
    location.href = '/mycart';
  }

  redirectToContactPage() {
    location.href = '/contact';
  }

  redirectToMyProducerPage() {
    location.href = '/producer';
  }

  redirectToHomePage() {
    location.href = '';
  }

  redirectToShowProducts() {
    location.href = '/products';
  }

  redirectToAddProduct() {
    location.href = 'product/add';
  }

  redirectToAddRecipe() {
    location.href = 'recipe/add';
  }

  redirectToShowRecipe() {
    location.href = 'recipe';
  }


  redirectToAddDiscount() {
    console.log('lista produsele mele');
    location.href = 'products/discount';
  }
}
