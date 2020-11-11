import Service from '@ember/service';

import { inject } from '@ember/service';

function randomize(meals) {
  return meals.slice().reverse();
}

export default class MealsService extends Service {
  @inject mealsStore;

  updateMeal() {
    this.mealsStore.updateMeal();
  }

  get meals() {
    return this.mealsStore.mealsArray;
  }

  get randomMeals() {
    return randomize(this.meals);
  }
}
