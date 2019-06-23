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
  private recenzieProdus: Recenzie;
  listopinii: any;


  constructor(private http: HttpClient, private alertService: AlertService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentFunction = JSON.parse(localStorage.getItem('currentFunction'));
  }


  getAllProducts(): void {
    console.log('iat toate produsele ');

    const url = 'http://localhost:8080/produse/';
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
             category: string, measureunit: string, dataproducere: any, valoaremasura: number, mail: string) {

    this.product = new Produse(null, mail, cantitate, zona, category, dataproducere,
      pret, termenvalabilitate, nume, descriere, measureunit, valoaremasura, fileToUpload);
    console.log('adaugprodus');
    const url = 'http://localhost:8080/produse/insert';
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
    const url = 'http://localhost:8080/produse/find';
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

    const url = 'http://localhost:8080/produse/cart/insert';
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
    const url = 'http://localhost:8080/produse/cart/get';
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
    const url = 'http://localhost:8080/produse/cart/get/product';
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
    const url = 'http://localhost:8080/produse/cart/buy';
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
        location.href = 'achizitie/detalii';
      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  deleteProductFromCart(id: any) {

    const url = 'http://localhost:8080/produse/cart/delete';
    this.http.post(url, {},
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('id', id)
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
    const url = 'http://localhost:8080/produse/top10';
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
    const url = 'http://localhost:8080/produse/mine';
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
    const url = 'http://localhost:8080/produse/set/discount';
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
    const url = 'http://localhost:8080/produse/set/star';
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

  getCurrentRating(idprodus: any) {
    console.log('iau toate stelele mele...');
    const url = 'http://localhost:8080/produse/get/rating';
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
    const url = 'http://localhost:8080/produse/get/discount';
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
        console.log(res);
        return res.procent;
      },
      err => {

        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  getAllProductsByCategory(nume: any) {
    console.log('iat toate produsele ');

    const url = 'http://localhost:8080/produse/';
    this.http.get(url,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('categorie', nume)
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

  getListaByProducator(mail: any) {

    console.log('iat toate produsele PRODUCATOR');

    const url = 'http://localhost:8080/produse/furnizor';
    this.http.get(url,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('mail', mail)
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

  deleteProduct(idprodus: number) {
    const url = 'http://localhost:8080/produse/delete';
    console.log(url);
    this.http.delete(url,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': 'true',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('idprodus', String(idprodus))
      }
    ).subscribe(
      (res) => {
        location.href = '/';
      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  chestionar(opinie: string, idproduct: any) {
    const url = 'http://localhost:8080/produse/chestionar';
    this.recenzieProdus = new Recenzie(null, idproduct, opinie, 0, new Date(), this.currentUser.mail);
    console.log(this.recenzieProdus);
    this.http.post(url, JSON.stringify(this.recenzieProdus),
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
        this.alertService.warn('Mulțumim pentru opinie.');
        this.delay(7000);
        this.redirectToHomePage();

      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  getListaOpinii(idprodus: any) {

    const url = 'http://localhost:8080/produse/opinii';
    this.http.get(url,
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
        console.log(res);
        this.listopinii = res;

      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  sendEmail() {

    const url = 'http://localhost:8080/email/semdemail';

    this.http.post(url, {},
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
        this.alertService.warn('Mulțumim pentru opinie.');
        this.delay(7000);
        this.redirectToHomePage();

      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

}
