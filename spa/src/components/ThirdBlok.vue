<template>
<div class="task-blok">
 <h2>Время на выполнение (в часах)</h2>
<input type="number" v-model.trim="this.$store.state.time" min="1" max="100"  placeholder="Укажите время">

<div class="blok-button">
  <router-link  :to="{name: 'second'}" class="btn margin-50">Назад</router-link>
  <router-link  :to="{name: 'fourth'}" class="btn-grad margin-50" v-if="!(this.$store.state.time == null) && this.$store.state.time <= 100">Далее</router-link>
</div>

</div>
</template>

<style scoped>

 input[type='number']{
    height: 38px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.122);
    /* border:1px solid white; */
    border: none;
    border-radius: 5px;
    font-family: inherit;
    color: #fff;
       outline: none;
  }
  input[type='number']::placeholder {
    color: rgba(255, 255, 255, 0.492);
  }
</style>