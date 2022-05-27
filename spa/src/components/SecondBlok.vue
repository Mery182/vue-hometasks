<template>
<div class="task-blok">
 <h2>Описание задачи</h2>
 <textarea type="text" v-model.trim="this.$store.state.description" placeholder="Опишите вашу задачу"></textarea>

<div class="blok-button">
  <router-link  :to="{name: 'home'}" class="btn margin-50">Назад</router-link>
  <router-link  :to="{name: 'third'}" class="btn-grad margin-50" v-if="!(this.$store.state.description == '')">Далее</router-link>
</div>

</div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 textarea{
   
    height: 88px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.122);
    /* border:1px solid white; */
    border: none;
    border-radius: 5px;
    font-family: inherit;
    color: #fff;
       outline: none;
  }
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.492);
  }
</style>