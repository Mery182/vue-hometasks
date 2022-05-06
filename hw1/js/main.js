'use strict';

// Задание 1
// Дан массив, вывести информацию и животных в html. 
// Необходимо добавить стилей, чтобы карточки выглядели
//  красиво. Под каждой карточкой добавить кнопку-ссылку 'Подробнее'.


// параметры инициализации  компонента/ объявление свойств
// это корневой компонент
let rootCards = {
    // в компоненте data - метод, окторый возвращает объект  свойства перечисленные в объекта попадают в систему реактивности
    data() { // метод всегда возвращвает объект
        return {
             cats: [
                {
                    name: "Люся",
                    age: "1 год",
                    color: "трехцветная",
                    img: "https://picsum.photos/id/219/1000/1000"
                },
                {
                    name: "Макс",
                    age: 4,
                    color: "серый",
                    img: "https://picsum.photos/id/1074/1000/1000"
                },
                {
                    name: "Василий",
                    age: 1,
                    color: "трехцветный",
                    img: "https://picsum.photos/id/593/1000/1000"
                }
            ]
         
        }
    }
   
}


Vue.createApp(rootCards).mount('#app');

