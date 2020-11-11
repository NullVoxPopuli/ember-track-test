import Service from '@ember/service';

import { tracked } from '@glimmer/tracking';

import {
  TrackedArray,
} from 'tracked-built-ins';

class Meal {
  @tracked name;

  constructor(name) {
    this.name = name;
  }
}

function newMeal() {
  return new Meal(Math.ceil(Math.random() * 100));
}

export default class MealsStoreService extends Service {
  mealsArray = new TrackedArray([ newMeal(), newMeal(), newMeal() ]);

  get length() {
    return this.mealsArray.length;
  }


  updateMeal() {
    this.mealsArray.replace(1, 1, [ newMeal() ]);
  }
}
