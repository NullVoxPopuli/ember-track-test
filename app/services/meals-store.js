import Service from '@ember/service';

import { alias } from '@ember/object/computed';
import { cached } from '@glimmer/tracking';
import {
  TrackedArray,
} from 'tracked-built-ins';

export default class MealsStoreService extends Service {
  @cached
  get _mealsArray() {
    return [this.newMeal(), this.newMeal(), this.newMeal()];
  }

  @alias('_mealsArray') mealsArray;
  // mealsArray = new TrackedArray(this._mealsArray);

  get length() {
    return 3;
  }
  newMeal() {
    return { name: Math.ceil(Math.random() * 100) };
  }
  updateMeal() {
    this.mealsArray.replace(1, 1, [ this.newMeal() ]);
  }
}
