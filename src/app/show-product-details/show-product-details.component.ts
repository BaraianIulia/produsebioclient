import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProduseService} from '../serviceProduse/produse.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Produse} from '../models/produse.model';


@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css'],
})
export class ShowProductDetailsComponent implements OnInit {

  private idprodus: any;
  private currentUser: any;
  private currentFunction: any;
  private nrBucati: string;

  constructor(public produseService: ProduseService, private route: ActivatedRoute,
              private router: Router) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentFunction = JSON.parse(localStorage.getItem('currentFunction'));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idprodus = params.id;
    });
    this.produseService.getProductById(this.idprodus);
    this.produseService.getCurrentRating(this.idprodus);


  }

  addCart() {
    this.produseService.addCart(this.nrBucati);
  }

  changeNumarBucati(value: string) {
    this.nrBucati = value;

  }

  onStarChange(starvalue) {
    this.produseService.setStars(starvalue, this.idprodus, this.currentUser.mail);
    this.produseService.getCurrentRating(this.idprodus);
    location.href = '/product/' + this.idprodus;
  }

  addDiscount(id: any) {
    location.href = 'products/discount/' + id;

  }

  deleteProduct(idprodus: number) {
    this.produseService.deleteProduct(idprodus);
  }

  chestionar(idprodus: number) {
    location.href = 'survey/' + idprodus;
  }

  pareri(idprodus: number) {
    location.href = '/product/review/' + idprodus;
  }

  redirectToHomePage() {
    location.href = '';
  }
}
