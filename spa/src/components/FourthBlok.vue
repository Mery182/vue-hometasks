<template>
<div class="task-blok">
 <h2>Исполнитель:</h2>
 <label for="man">Выберите из списка:</label>
 <select id="man" size="1" v-model.trim="this.$store.state.man">
    <option>Исполнитель 1</option> <option>Исполнитель 2</option>
 </select>
<div class="blok-button">
 <router-link  :to="{name: 'third'}" class="btn ">Назад</router-link>
  <router-link  :to="{name: 'five'}" class="btn-grad ">Далее</router-link>
</div>
</div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
label {
  text-align: left;
}
 select{
   
    height: 38px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.122);
    /* border:1px solid white; */
    border: none;
    border-radius: 5px;
    font-family: inherit;
    color: #fff;
      appearance: none;
       font-family: inherit;
         outline: none;

  }
  select::placeholder {
    color: rgba(255, 255, 255, 0.492);
  }
option {
  padding: 5px;
}

</style>
