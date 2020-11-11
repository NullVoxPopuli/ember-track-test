import Controller from '@ember/controller';

import { action } from '@ember/object';
import { inject } from '@ember/service';
import { cached } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @inject('meals') mealService;
  get meals() {
    return this.mealService.meals;
  }
  @cached
  get planMeals() {
    return this.mealService.randomMeals;
  }
  @action
  updateMeal() {
    this.mealService.updateMeal();
  }
}
