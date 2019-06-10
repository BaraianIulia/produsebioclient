import { Component, OnInit } from '@angular/core';
import {ProduseService} from '../serviceProduse/produse.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../serviceRecipe/recipe.service';

@Component({
  selector: 'app-show-recipe-details',
  templateUrl: './show-recipe-details.component.html',
  styleUrls: ['./show-recipe-details.component.css']
})
export class ShowRecipeDetailsComponent implements OnInit {
  private idrecipe: any;

  constructor(public recipeService: RecipeService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idrecipe = params.id;
    });
    this.recipeService.getRecipeById(this.idrecipe);
  }

}
