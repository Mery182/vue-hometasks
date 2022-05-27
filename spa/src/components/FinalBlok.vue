<template>
<div class="task-blok">
 <ul><h3> Поздравляем! Ваше задание создано:</h3>
<li><b>Название:</b> {{ this.$store.state.name}}</li>
<li><b>Описание:</b><br> {{this.$store.state.description}}</li>
<li><b>Время в часах:</b> {{this.$store.state.time}}</li>
<li><b>Исполнитель:</b> {{this.$store.state.man}}</li>
<li><b>Приложение:</b> {{Object.values(this.$store.state.file)}}</li>
 </ul>
</div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-align: left;
}
ul {
  list-style-type: none;
  display: inline;
  padding: 0;
  
}
li {
  display: block;
  margin: 0;
  text-align: left;
}



</style>
