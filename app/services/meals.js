import Service from '@ember/service';

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
  @cached
  get meals() {
    return this.mealsStore.mealsArray;
  }
  @cached
  get randomMeals() {
    return randomize(this.meals);
  }
}
