import Controller from '@ember/controller';

import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class ApplicationController extends Controller {
  @inject('meals') mealService;

  get meals() {
    return this.mealService.meals;
  }

  get planMeals() {
    return this.mealService.randomMeals;
  }

  @action
  updateMeal() {
    this.mealService.updateMeal();
  }
}
