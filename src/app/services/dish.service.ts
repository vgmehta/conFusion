import { DISHES } from './../shared/dishes';
import { Dish } from './../shared/dish';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: string): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => (dish.featured))[0];
  }
}