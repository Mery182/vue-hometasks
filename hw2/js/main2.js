'use srtict';

let articles = [{
        title: "Нейросеть может читать текст быстрее человека",
        image: "https://picsum.photos/id/22/1000/1000"
    },
    {
        title: "Пять сервисов, которые помогут написать статью за 5 минут",
        image: "https://picsum.photos/id/24/1000/1000"
    },
    {
        title: "Названы основные правила движения поездов",
        image: "https://picsum.photos/id/28/1000/1000"
    },
    {
        title: "Самая посещаемая достопримечательность мира",
        image: "https://picsum.photos/id/27/1000/1000"
    },
    {
        title: "Появился новый термин для обозначения радиоволн",
        image: "https://picsum.photos/id/29/1000/1000"
    },
    {
        title: "В России появится новый вид бумаги",
        image: "https://picsum.photos/id/30/1000/1000"
    }
];

Vue.createApp({
    data() {
        return {
            articles,
            active: false,
            another: false,
            buttonTextone: 'Отобразить сеткой',
            buttonTexttwo: 'Отобразить списком',
        }
    },
        methods: {
            addfirstClass(active, another, buttonTextone){
                 if(this.active){
                    this.active = false;
                    this.another = true;
                    this.buttonTextone = 'Отобразить сеткой';

                 } else if (!this.active){
                     this.active = true;
                     this.another = false;
                     this. buttonTextone = 'Отобразить спискoм';
                  
                 }
                
            },  
            addsecondClass(active, another, buttonTexttwo){
                if(this.another){
                   this.another = false;
                   this.active = true;
                  this.buttonTexttwo = 'Отобразить списком';

                } else if (!this.another){
                    this.another = true;
                    this.active = false;
                    this.buttonTexttwo = 'Отобразить сеткой';
                 
                }
               
           },  
        
        
    }

}).mount('#app');