import { Component } from '@angular/core';

@Component({
  selector: 'app-home-restaraunts',
  templateUrl: './home-restaraunts.component.html',
  styleUrls: ['./home-restaraunts.component.scss']
})
export class HomeRestarauntsComponent {
  public restaraunts = [
    {
      title: 'Royal Sushi House',
      time: '30-40 min',
      img: 'assets/home/restaraunts/royal-suahi-house.png',
      cart: 10,
      price: '$32 min sum',     
      tags: [
        {
        title: 'Sushi',
        img: 'assets/home/restaraunts/sushi.png'
      }
    ]
    },
    {
      title: 'Burgers & Pizza',
      time: '40-60 min',
      img: 'assets/home/restaraunts/burger-and-pizza.png',
      cart: 2,
      price: '$24 min sum',     
      tags: [
        {
        title: 'Burger',
        img: 'assets/home/restaraunts/burger.png'
      },
      {
        title: 'Pizza',
        img: 'assets/home/restaraunts/pizza.png'
      }

    ]
    },
    {
      title: 'Ninja sushi',
      time: '20-40 min',
      img: 'assets/home/restaraunts/ninja-sushi.png',
      cart: 0,
      price: '$40 min sum',     
      tags: [
        {
        title: 'Sushi',
        img: 'assets/home/restaraunts/sushi.png'
      }
    ]
    },
    {
      title: 'Sushi master',
      time: '60-70 min',
      img: 'assets/home/restaraunts/sushi-master.png',
      cart: 0,
      price: '$49 min sum',     
      tags: [
        {
        title: 'Sushi',
        img: 'assets/home/restaraunts/sushi.png'
      }
    ]
    },
    {
      title: 'Japanese sushi',
      time: '30-50 min',
      img: 'assets/home/restaraunts/japanese-sushi.png',
      cart: 0,
      price: '$104 min sum',     
      tags: [
        {
        title: 'Sushi',
        img: 'assets/home/restaraunts/sushi.png'
      }
    ]
    },
    {
      title: 'Kobe',
      time: '20-30 min',
      img: 'assets/home/restaraunts/kobe.png',
      cart: 3,
      price: '$57 min sum',     
      tags: [
        {
        title: 'Sushi',
        img: 'assets/home/restaraunts/sushi.png'
      }
    ]
    }
    
  ]
}
