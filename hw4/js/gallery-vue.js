'use strict';


let imgBlok = {
    template: `
  <div>
  <img :src="card.path" :alt="card.title">
  <h4> {{ card.title }} </h4>
  <button v-on:click="dImages"> Удалить </button>
  </div>

  `,
    props: { // передаем данные из родителя 
        card: Object,
    },
    emits: ['sendImage'], // переечисляем названия событий
    methods: {
        dImages() {
            this.$emit('sendImage', this.card.title);
        }
    }
};


let main = Vue.createApp({
    data() {
        return {
            title: '',
            path: '',
            error: '',
            error_path: '',
            images: [{
                    title: 'Первая картинка',
                    path: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA'
                },
                {
                    title: 'Вторая картинка',
                    path: 'https://i.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60'
                },
                {
                    title: 'Третья картинка',
                    path: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA'
                },

            ]
        }
    },
    methods: {
        inputTitle(e) {
            this.title = e.target.value;
        },
        inputLink(e) {
            this.path = e.target.value;
        },
        createImage() {

            let newImage = {
                title: this.title,
                path: this.path,
            }
            if (newImage.title.length < 4) return this.error = 'Больше 3 символов пожалуйста';
            if (newImage.path == '') return this.error_path = 'Вставьте ссылку пожалуйста';
            else this.images.push(newImage);
            this.title = '',
                this.path = ''

        },
        showChildDelete(value) { // это данные которые передаст дочерний компонент - т/е/ значение price окмпонента outerbutton
            this.images = this.images.filter(i => i.title !== value);
            console.log(value);


        }
    },

});

main.component('blok-gallery', imgBlok); // глобальная регистрация
main.mount('#gallery');