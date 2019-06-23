import {Injectable} from '@angular/core';
import {Recipe} from '../models/recipe.mode;';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AlertService} from '../alertService/alert.service';
import {Produse} from '../models/produse.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private currentUser: any;
  private currentFunction: any;
  private recipe: Recipe;
  private list: any;
  private recipeFound: Recipe;
  recipeProducts: any;

  constructor(private http: HttpClient, private alertService: AlertService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentFunction = JSON.parse(localStorage.getItem('currentFunction'));
  }

  addRecipe(nume: string, produse: string, modpreparare: string, timp: string, buget: number, fileToUpload: any) {
    const url = 'http://localhost:8080/recipe/add';
    console.log(produse);
    this.recipe = new Recipe(null, nume, fileToUpload, produse, modpreparare, buget, timp, this.currentUser.mail);
    console.log(this.recipe.listaproduse);
    this.http.post(url, JSON.stringify(this.recipe),
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
        this.alertService.warn('Rețetă adăugată');
        this.delay(500);
        this.redirectToRecipeList();

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

  private redirectToRecipeList() {
    location.href = '/recipe';
  }

  getAllRecipes() {
    console.log('iat toate retetele ');

    const url = 'http://localhost:8080/recipe/';
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

  getRecipeById(idrecipe: any) {

    const url = 'http://localhost:8080/recipe/find';
    this.http.get<Recipe>(url,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('idrecipe', idrecipe),
      }
    ).subscribe(
      (res) => {
        this.recipeFound = res;

      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );


  }

  getRecipeProducts(idrecipe: any) {
    console.log('produsele de la reteta');
    const url = 'http://localhost:8080/recipe/products';
    this.http.get(url,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('idrecipe', idrecipe),
      }
    ).subscribe(
      (res) => {
        this.recipeProducts = res;

      },
      err => {
        console.log(err.error.errorMessage);
        this.alertService.warn(err.error.errorMessage);
      },
      () => console.log('HTTP request completed.')
    );
  }
}
