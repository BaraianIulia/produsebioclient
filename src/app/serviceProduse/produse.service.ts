import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AlertService} from '../alertService/alert.service';
import {Produse} from '../models/produse.model';
import {CartProduct} from '../models/cartProduct.model';
import {Reducere} from '../models/reducere.model';
import {Recenzie} from '../models/recenzie.model';

@Injectable({
  providedIn: 'root'
})
export class ProduseService implements OnInit {

  list: any;
  private currentUser: any;
  private currentFunction: any;
  private product: Produse;
  productFound: Produse;
  // noinspection JSAnnotator
  cartList: any;
  private cartProduct: CartProduct;
  private productToDeleteId: any;
  private listTop10Products: any;
  public listImagini: Array<Produse> = [];
  public product1: Produse;
  public product2: Produse;
  public product3: Produse;
  listMyProducts: any;
  private reducere: Reducere;
  recenzieProdusTotal: Recenzie;


  constructor(private http: HttpClient, private alertService: AlertService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentFunction = JSON.parse(localStorage.getItem('currentFunction'));
  }


  getAllProducts(): void {
    console.log('iat toate produsele ');

    const url = 'http://localhost:8080/products/';
    this.http.get(url,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        })
      }
    ).subscribe(
      (res) => {
        console.log(res);
        this.list = res;

      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  addProduct(nume: string, descriere: string, cantitate: number, pret: number, termenvalabilitate: number, zona: string, fileToUpload: any,
             category: string, measureunit: string, dataproducere: any, valoaremasura: number) {

    this.product = new Produse(null, this.currentUser.mail, cantitate, zona, category, dataproducere,
      pret, termenvalabilitate, nume, descriere, measureunit, valoaremasura, fileToUpload);
    console.log('adaugprodus');
    const url = 'http://localhost:8080/products/insert';
    this.http.post(url,
      JSON.stringify(this.product),
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    ).subscribe(
      (res) => {
        console.log(res);
        this.alertService.warn('Produs adăugat.');
        this.delay(500);

        this.redirectToHomePage();

      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );

  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private redirectToHomePage() {
    location.href = '';
  }

  getProductById(idprodus: any) {
    const url = 'http://localhost:8080/products/find';
    this.http.get<Produse>(url,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('idprodus', idprodus),
      }
    ).subscribe(
      (res) => {
        this.productFound = res;

      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );

  }

  addCart(nrBucati: string) {
    console.log('adaug elemm in cos');
    this.cartProduct = new CartProduct(this.productFound, Number(nrBucati));

    const url = 'http://localhost:8080/products/cart/insert';
    this.http.post(url,
      JSON.stringify(this.cartProduct),
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    ).subscribe(
      (res) => {
        console.log(res);
        this.alertService.warn('Produs adăugat.');
      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );


  }

  getTotalPriceCart() {
    let sum = 0;
    for (const product of this.cartList) {
      sum = product.produs.pret * product.nrBucati + sum;
    }
    return sum;
  }

  getCartItems() {
    const url = 'http://localhost:8080/products/cart/get';
    this.http.get(url,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    ).subscribe(
      (res) => {
        this.cartList = res;

      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  getCartList() {
    console.log(this.cartList);
    return this.cartList;
  }

  getCartItemId(item: CartProduct) {
    const url = 'http://localhost:8080/products/cart/get/product';
    this.http.post(url, JSON.stringify(item),
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    ).subscribe(
      (res) => {
        this.productToDeleteId = res;

      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  buyProductsFromCart() {
    const url = 'http://localhost:8080/products/cart/buy';
    this.http.post(url, {},
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('mail', this.currentUser.mail).set('tip', 'Achizitie')
      }
    ).subscribe(
      (res) => {
        this.alertService.warn('Mulțumim');
      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  deleteProductFromCart(id: any) {

    const url = 'http://localhost:8080/products/cart/delete/' + id;
    console.log(url);
    this.http.delete(url,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Headers': '*',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        })
      }
    ).subscribe(
      (res) => {
        location.href = '/mycart';
      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  getListaImagini() {
    const url = 'http://localhost:8080/products/top10';
    this.http.get(url,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    ).subscribe(
      (res) => {
        this.listTop10Products = res;
        console.log(this.listTop10Products.length);
        for (const product of this.listTop10Products) {
          this.listImagini.push(product.poza);
        }
        this.product1 = this.listTop10Products.pop();

        this.product2 = this.listTop10Products.pop();
        this.product3 = this.listTop10Products.pop();


      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );


  }


  getAllMyProducts() {
    console.log('iau toate produsele mele...');
    const url = 'http://localhost:8080/products/mine';
    this.http.get(url,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('mail', this.currentUser.mail)
      }
    ).subscribe(
      (res) => {
        console.log(res);
        this.listMyProducts = res;

      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  setDiscount(discount: string, idproduct: number, datastart: any, datafinal: any) {
    const url = 'http://localhost:8080/products/set/discount';
    this.reducere = new Reducere(null, idproduct, Number(discount), datastart, datafinal);
    console.log(this.reducere);
    this.http.post(url, JSON.stringify(this.reducere),
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    ).subscribe(
      (res) => {
        this.alertService.warn('Reducere adăugată.');
        this.delay(500);

        this.redirectToHomePage();

      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }


  setStars(starvalue: any, idprodus: any, mail: string | any) {
    const url = 'http://localhost:8080/products/set/star';
    this.http.post(url, {},
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('starvalue', starvalue).set('idprodus', idprodus).set('mail', mail)
      }
    ).subscribe(
      (res) => {
        this.alertService.warn('Mulțumim pentru vot.');

      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  getCurrentRating(idprodus: any, mail: any) {
    console.log('iau toate stelele mele...');
    const url = 'http://localhost:8080/products/get/rating';
    this.http.get<Recenzie>(url,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('idprodus', idprodus)
      }
    ).subscribe(
      (res) => {
        this.recenzieProdusTotal = res;
        console.log('scor total');
        console.log(this.recenzieProdusTotal);
      },
      err => {

        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  getDiscount(idprodus: any) {
    console.log('iau toate stelele mele...');
    const url = 'http://localhost:8080/products/get/discount';
    this.http.get<Reducere>(url,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('idprodus', idprodus)
      }
    ).subscribe(
      (res) => {
        return res.procent;
      },
      err => {

        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }
}
