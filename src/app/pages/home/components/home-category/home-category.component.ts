import { Component } from '@angular/core';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class HomeCategoryComponent {

  pizza(): void {
    const pizza = document.getElementById("pizza");
    const pizzaTitle = document.getElementById("pizzaTitle");
  
    if (pizza) {
      pizza.classList.toggle("pizza_active");
    }
    if (pizzaTitle) {
      pizzaTitle.classList.toggle("pizza__title_active");
    }
  } 

  burger(): void {
    const burger = document.getElementById("burger");
    const burgerTitle = document.getElementById("burgerTitle");
  
    if (burger) {
      burger.classList.toggle("burger_active");
    }
    if (burgerTitle) {
      burgerTitle.classList.toggle("burger__title_active");
    }
  } 

  bbq(): void {
    const bbq = document.getElementById("bbq");
    const bbqTitle = document.getElementById("bbqTitle");
  
    if (bbq) {
      bbq.classList.toggle("bbq_active");
    }
    if (bbqTitle) {
      bbqTitle.classList.toggle("bbq__title_active");
    }
  } 

  sushi(): void {
    const sushi = document.getElementById("sushi");
    const sushiTitle = document.getElementById("sushiTitle");
  
    if (sushi) {
      sushi.classList.toggle("sushi_active");
    }
    if (sushiTitle) {
      sushiTitle.classList.toggle("sushi__title_active");
    }
  } 

  vegan(): void {
    const vegan = document.getElementById("vegan");
    const veganTitle = document.getElementById("veganTitle");
  
    if (vegan) {
      vegan.classList.toggle("vegan_active");
    }
    if (veganTitle) {
      veganTitle.classList.toggle("vegan__title_active");
    }
  }

  desserts(): void {
    const desserts = document.getElementById("desserts");
    const dessertsTitle = document.getElementById("dessertsTitle");
  
    if (desserts) {
      desserts.classList.toggle("desserts_active");
    }
    if (dessertsTitle) {
      dessertsTitle.classList.toggle("desserts__title_active");
    }
  }

}
