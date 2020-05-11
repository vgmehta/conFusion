import { Component, OnInit, Inject } from '@angular/core';

import { DishService } from './../services/dish.service';
import { PromotionService } from './../services/promotion.service';
import { LeaderService } from './../services/leader.service';

import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { Leader } from '../shared/leader';
import { flyInOut, expand } from '../animations/app.animations';
// import { baseURL } from './../shared/baseurl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  dishErrMsg: string;
  promotion: Promotion;
  promotionErrMsg: string;
  leader: Leader;
  leaderErrMsg: string;

  constructor(private dishservice: DishService, 
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    @Inject('BaseURL') private baseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
        errMsg => this.dishErrMsg = errMsg);
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion,
        errMsg => this.promotionErrMsg = errMsg);
    this.leaderservice.getFeaturedLeader()
      .subscribe(leader => this.leader = leader,
        errMsg => this.leaderErrMsg = errMsg);
  }

}
