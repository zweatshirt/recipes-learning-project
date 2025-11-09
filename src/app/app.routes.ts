import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { RecipePage } from './components/recipe-page/recipe-page';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'recipe/:recipeId',
    component: RecipePage,
  },
];
