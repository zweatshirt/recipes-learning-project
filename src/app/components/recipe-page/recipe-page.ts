import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipesService } from '../../services/recipesService';
import { Recipe } from '../recipe-list/recipe-list';
import { CommonModule } from '@angular/common';
import { RecipeInfo } from '../recipe-info/recipe-info';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-page',
  imports: [CommonModule, RecipeInfo, FormsModule],
  templateUrl: './recipe-page.html',
  styleUrl: './recipe-page.css',
})
export class RecipePage implements OnInit {
  recipeSubscription!: Subscription;
  recipe!: Recipe | null;
  ingredients!: string[] | null;

  selectedIngredients: string[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipe = this.recipesService.selectedRecipe;
    this.ingredients = this.recipesService.selectedRecipe?.ingredients || null;
    this.recipeSubscription = this.recipesService.event$.subscribe((event) => {
      if (!event) {
        return;
      }
      this.recipesService.setSelectedRecipe(event);
      this.recipe = this.recipesService.selectedRecipe;
      this.ingredients = this.recipesService.selectedRecipe?.ingredients || null;
    });
  }

  toggleIngredient(selectedIngredient: string, checked: boolean) {
    if (checked) {
      this.selectedIngredients.push(selectedIngredient);
      return;
    }
    this.selectedIngredients = this.selectedIngredients.filter(
      (ingredient) => ingredient !== selectedIngredient
    );
  }
}
