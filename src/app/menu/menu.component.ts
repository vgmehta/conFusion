import { baseURL } from '../shared/baseurl';
import { Dish } from './../shared/dish';
import { DishService } from './../services/dish.service';
import { Component, OnInit, Inject } from '@angular/core';
import { flyInOut, expand } from '../animations/app.animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})

export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMsg: string;

  constructor(private dishService: DishService,
    @Inject('BaseURL') private baseURL) { }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes,
        errMsg => this.errMsg = <any>errMsg);
  }
}
