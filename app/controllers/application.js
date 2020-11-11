import Controller from '@ember/controller';

import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject } from '@ember/service';

export default class ApplicationController extends Controller {
  @inject('meals') mealService;
  @alias('mealService.meals') meals;
  @alias('mealService.randomMeals') planMeals;
  @action
  updateMeal() {
    this.mealService.updateMeal();
  }
}
