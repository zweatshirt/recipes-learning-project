import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipesService } from '../../services/recipesService';
import { OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe-list';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { RecipeInfo } from '../recipe-info/recipe-info';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-page',
  imports: [NgIf, NgFor, RecipeInfo, FormsModule, CommonModule],
  templateUrl: './recipe-page.html',
  styleUrl: './recipe-page.css',
})
export class RecipePage implements OnInit {
  recipeSubscription!: Subscription;
  recipe!: Recipe | null;
  ingredients = this.recipe?.ingredients;

  selectedIngredients: string[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipeSubscription = this.recipesService.event$.subscribe((event) => {
      this.recipe = event;
    });
  }

  toggleIngredient(selectedIngredient: string, checked: boolean) {
    console.log(this.selectedIngredients);
    if (checked) {
      this.selectedIngredients.push(selectedIngredient);
      return;
    }
    this.selectedIngredients = this.selectedIngredients.filter(
      (ingredient) => ingredient !== selectedIngredient
    );
  }
}
