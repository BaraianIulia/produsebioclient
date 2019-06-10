import { Component, OnInit } from '@angular/core';
import {ProduseService} from '../serviceProduse/produse.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../serviceRecipe/recipe.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.css']
})
export class ShowRecipeComponent implements OnInit {


  config: any;

  constructor(public recipeService: RecipeService, private route: ActivatedRoute,
              private router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 10
    };

    this.route.queryParamMap.pipe(map(params => params.get('page')))
      .subscribe(page => this.config.currentPage = page);
  }

  ngOnInit() {  this.recipeService.getAllRecipes();
  }

  pageChange(newPage: number) {
    this.router.navigate([''], {queryParams: {page: newPage}});
  }

  seeDetails(idrecipe: number) {
    location.href = '/recipe/' + idrecipe;
  }

}
