<template>
<div class="task-blok">
 <h2>Название задачи</h2>
 <input type="text"  v-model.trim="this.$store.state.name" placeholder="Напишите название вашей задачи">
 <router-link  :to="{name: 'second'}" class="btn-grad " v-if="!(this.$store.state.name == '')">Далее</router-link>
 
</div>
</template>



<script>
export default {
       data(){
         return {

         }
       },
    
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

 input[type='text']{
      outline: none;
    height: 38px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.122);
    /* border:1px solid white; */
    border: none;
    border-radius: 5px;
    font-family: inherit;
    color: #fff;
  }
  input[type='text']::placeholder {
    color: rgba(255, 255, 255, 0.492);
  }
</style>
