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

  redirectToShowProductsToate() {
    location.href = '/products/show/toate';
  }

  redirectToShowProductsLegume() {
    location.href = '/products/show/legume';
  }

  redirectToShowProductsFructe() {
    location.href = '/products/show/fructe';
  }

  redirectToShowProductsCarne() {
    location.href = '/products/show/carne';
  }

  redirectToShowProductsOua() {
    location.href = '/products/show/oua';
  }

  redirectToShowProductsCereale() {
    location.href = '/products/show/cereale';
  }

  redirectToShowProductsBauturi() {
    location.href = '/products/show/bauturi';
  }

  redirectToShowProductsAltele() {
    location.href = '/products/show/altele';
  }
}
