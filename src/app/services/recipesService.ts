import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Recipe } from '../components/recipe-list/recipe-list';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipeSubject = new BehaviorSubject<Recipe | null>(null);
  _selectedRecipe: Recipe | null = null;

  constructor(private httpClient: HttpClient) {}

  setSelectedRecipe(recipe: Recipe) {
    this._selectedRecipe = recipe;
    localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
  }

  get selectedRecipe(): Recipe | null {
    if (this._selectedRecipe) {
      return this._selectedRecipe;
    }
    const recipe = localStorage.getItem('selectedRecipe');
    if (!recipe) {
      return null;
    }
    return JSON.parse(recipe);
  }

  event$ = this.recipeSubject.asObservable();
  emitRecipe(recipe: Recipe) {
    this.recipeSubject.next(recipe);
  }

  get recipes(): Observable<Recipe[]> {
    return this.httpClient.get<{ recipes: Recipe[] }>('https://dummyjson.com/recipes').pipe(
      map((data) => {
        return data.recipes;
      })
    );
  }
}
