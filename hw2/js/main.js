'use strict';

// Вывод информации о товарах.

let goods = [
    {
       title: "Пианино",
       price: 3000,
       count: 0
    },
    {
       title: "Гитара",
       price: 1200,
       count: 40
    },
    {
       title: "Барабаны",
       price: 2700,
       count: 12
    },
    {
       title: "Флейта",
       price: 900,
       count: 50
    },
    {
       title: "Арфа",
       price: 3400,
       count: 5
    }
 ];

Vue.createApp ({
   data(){
       return {
           goods,
            
       }
   },
  methods: {
   sortByCountPlus(){ //сортировка по возрастанию
       return this.goods.sort((a,b) => a.count - b.count);
   },
   sortByCountMinus(){ // сортировка по убыванию
      return this.goods.sort((a,b) => b.count - a.count)
   },
   sortByName(){  // сортировка по имени
      return this.goods.sort((a,b) => a.title.localeCompare(b.title)) 
   },
   sortByPrice(){
      return this.goods.sort((a,b) => a.price - b.price)
   }
  }
}).mount('#app');

