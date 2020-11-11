import Service from '@ember/service';

import { alias } from '@ember/object/computed';
import { inject } from '@ember/service';
import { cached } from '@glimmer/tracking';

function randomize(meals) {
  return meals.slice().reverse();
}

export default class MealsService extends Service {
  @inject mealsStore;
  updateMeal() {
    this.mealsStore.updateMeal();
  }
  @alias('mealsStore.mealsArray') meals;
  @cached
  get randomMeals() {
    return randomize(this.meals);
  }
}
