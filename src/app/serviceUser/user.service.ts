import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Client} from '../models/client.model';
import {AlertService} from '../alertService/alert.service';
import {Card} from '../models/card.model';
import {Furnizor} from '../models/furnizor.model';
import {EditData} from '../models/editData.model';
import {Produse} from '../models/produse.model';
import {CartProduct} from '../models/cartProduct.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentFunction: any;
  private currentUser: any;
  private editDataUser: EditData;
  private card: Card;
  private numarCard: any;
  private dataexpirarecard: any;
  private codiban: any;
  private descriere: any;
  private producerList: Array<Furnizor> = [];


  constructor(private http: HttpClient, private alertService: AlertService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentFunction = JSON.parse(localStorage.getItem('currentFunction'));
  }


  login(mail, parola, functie): void {
    console.log('conectare ');
    console.log(functie);
    if (functie === 'client') {
      const url = 'http://localhost:8080/clienti/login';
      this.http.post(url,
        {
          mail,
          parola
        },
        {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          params: new HttpParams().set('mail', mail).set('parola', parola),
        }
      ).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('currentUser', JSON.stringify(res));
          localStorage.setItem('currentFunction', JSON.stringify(functie));

          this.redirectToHomePage();

        },
        err => {
          console.log(err.error.errorMessage);
          this.alertService.warn(err.error.errorMessage);
        },
        () => console.log('HTTP request completed.')
      );

    } else if (functie === 'furnizor') {
      console.log('conectare furnizor');
      const url = 'http://localhost:8080/furnizori/login';
      this.http.post(url,
        {
          mail,
          parola
        },
        {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          params: new HttpParams().set('mail', mail).set('parola', parola),
        }
      ).subscribe(
        (res) => {
          localStorage.setItem('currentUser', JSON.stringify(res));
          localStorage.setItem('currentFunction', JSON.stringify(functie));
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

  logout() {
    localStorage.setItem('currentUser', JSON.stringify(null));
    localStorage.setItem('currentFunction', JSON.stringify(null));
    this.redirectToHomePage();

  }

  register(registerData, functie, repetaparola) {

    console.log('.');
    console.log(registerData.nume);
    console.log('.');
    console.log(functie);
    console.log(registerData.parola);
    console.log(repetaparola);
    console.log(registerData.codIBAN);
    console.log(registerData.fileToUpload);

    if (registerData.parola !== repetaparola) {
      this.alertService.warn('Parolele nu sunt identice.');
    } else if (registerData.nume === ' ' || registerData.prenume === ' ' || registerData.mail === '' || registerData.parola === ' ' ||
      repetaparola === ' ' || registerData.telefon === ' ' ||
      registerData.adresa === ' ' || registerData.dataexpirare === ' ' || registerData.cvvcod === ' ') {
      this.alertService.warn('Câmpurile nu pot fi goale.');
    } else if (functie === 'client') {

      console.log('inregistrez clien');

      const url = 'http://localhost:8080/clienti/register';

      this.http.post(url, JSON.stringify(registerData),
        {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE, POST, PUT, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
            Accept: 'application/json',
            Authorization: 'sai',
            'Content-Type': 'application/json',
          }),
        }
      ).subscribe(
        () => {
          registerData = null;
          this.redirectToLoginPage();

        },
        err => {
          console.log(err.error.errorMessage);
          window.scrollTo(0, 0);
          this.alertService.warn(err.error.errorMessage);
        },
        () => console.log('HTTP request completed.')
      );
    } else if (functie === 'furnizor') {

      console.log('inregistrez furnizor');
      const url = 'http://localhost:8080/furnizori/register';
      this.http.post(url,
        JSON.stringify(registerData),
        {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE, POST, PUT, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
            Accept: 'application/json',
            Authorization: 'sai',
            'Content-Type': 'application/json',
          }),
        }
      ).subscribe(
        () => {
          registerData = null;
          this.redirectToLoginPage();

        },
        err => {
          console.log(err.error.errorMessage);
          window.scrollTo(0, 0);
          this.alertService.warn(err.error.errorMessage);
        },
        () => console.log('HTTP request completed.')
      );
    }
  }


  private redirectToHomePage() {
    location.href = '';
  }

  private redirectToMyProfile() {
    location.href = '/myprofile/' + this.currentUser.nume + this.currentUser.prenume;
  }

  private redirectToLoginPage() {
    location.href = '/login';
  }


  editData(prenume: any, parolaveche: any, parola: any, repetaparola: any, telefon: any, adresa: any, fileToUpload: any, descriere: any) {
    if (parola !== repetaparola) {
      this.alertService.warn('Parolele nu sunt identice.');
    } else if (this.currentFunction === 'client') {
      this.editDataUser = new EditData(prenume, this.currentUser.mail, telefon, adresa, fileToUpload, parola, parolaveche, '');
      console.log('date client');
      const url = 'http://localhost:8080/clienti/editprofile';
      this.http.post(url,

        JSON.stringify(this.editDataUser)
        ,
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
          localStorage.setItem('currentUser', JSON.stringify(res));

          this.redirectToMyProfile();

        },
        err => {
          console.log(err.error.errorMessage);
          this.alertService.warn(err.error.errorMessage);
        },
        () => console.log('HTTP request completed.')
      );

    } else if (this.currentFunction === 'furnizor') {
      this.editDataUser = new EditData(prenume, this.currentUser.mail, telefon, adresa, fileToUpload, parola, parolaveche, descriere);

      const url = 'http://localhost:8080/furnizori/editprofile';
      this.http.post(url, JSON.stringify(this.editDataUser)
        ,
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
          localStorage.setItem('currentUser', JSON.stringify(res));

          this.redirectToMyProfile();

        },
        err => {
          console.log(err.error.errorMessage);
          this.alertService.warn(err.error.errorMessage);
        },
        () => console.log('HTTP request completed.')
      );

    }
  }

  editCard(numar: string, dataexpirare: string, cvvcod: string) {
    this.card = new Card(numar, dataexpirare, cvvcod);

    const url = 'http://localhost:8080/clienti/editcard';
    this.http.put(url,

      JSON.stringify(this.card)
      ,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, PUT, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('mail', this.currentUser.mail),
      }
    ).subscribe(
      (res) => {
        this.alertService.warn('Card schimbat.');
        this.delay(500);
        this.redirectToMyProfile();

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

  editCodIBAN(codIBAN: string) {


    const url = 'http://localhost:8080/furnizori/editcodiban';
    this.http.post(url, {}
      ,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('codiban', codIBAN).set('mail', this.currentUser.mail),
      }
    ).subscribe(
      (res) => {
        this.alertService.warn('Date modifiacate.');
        this.delay(500);
        this.redirectToMyProfile();

      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  getCard() {

    const url = 'http://localhost:8080/clienti/viewcard';
    this.http.get<Card>(url,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('mail', this.currentUser.mail),
      }
    ).subscribe(
      (res) => {

        this.numarCard = res.numar;
        this.dataexpirarecard = res.dataexpirare;
      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  getNumarCard() {
    return this.numarCard;
  }

  getDataExpirareCard() {
    return this.dataexpirarecard;
  }

  getCodIBAN() {
    return this.codiban;
  }

  viewCodIBAN() {
    const url = 'http://localhost:8080/furnizori/viewcodiban';
    console.log('vad codiban ceva?');
    this.http.post<Furnizor>(url,
      {}
      ,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('mail', this.currentUser.mail),
      }
    ).subscribe(
      (res) => {
        console.log(res);
        console.log('fac ceva?');
        this.codiban = res.codiban;
      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }

  getFunctie() {
    return this.currentFunction;
  }

  getAllProducers() {
    const url = 'http://localhost:8080/furnizori/';
    this.http.get<Array<Furnizor>>(url,
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
        this.producerList = res;

      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );

  }

  getListProducer() {
    return this.producerList;
  }

  loginAdmin(mail: any, parola: any) {
    const url = 'http://localhost:8080/admin/login';
    this.http.post(url,
      {      },
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('mail', mail).set('parola', parola),
      }
    ).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('currentUser', JSON.stringify(res));
        localStorage.setItem('currentFunction', JSON.stringify('admin'));

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
