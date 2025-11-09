import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../components/recipe-list/recipe-list';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipeSubject = new BehaviorSubject<Recipe | null>(null);

  constructor(private httpClient: HttpClient) {}

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
