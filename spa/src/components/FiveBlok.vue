<template>
<div class="task-blok">
 <h2>Приложение:</h2>
  <file-input class="but"  v-model="this.$store.state.file" button-background-color="#61b4c0"  is-image />
<div class="blok-button">
 <router-link  :to="{name: 'third'}" class="btn ">Назад</router-link>
  <router-link  :to="{name: 'final'}" class="btn-grad "  v-if="!(this.$store.state.file == '')">Готово</router-link>
</div>
</div>
</template>
<script>
import FileInput from '../components/FileInput.vue'

export default ({
  components: {
FileInput
  },
  data() {
    return{
     file: null
      
    }
  },
  methods: {
     
  },

})
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

label {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
}
img {
  padding-right: 10px;
}
span {
  padding: 50px;
}
.but {
  display: flex;
  align-items: center;
  justify-content: center;
}
input {

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
  input::placeholder {
    color: rgba(255, 255, 255, 0.492);
  }
@media screen and(max-width:786px){
  .but {
 
  flex-direction: column;
  
}
}
</style>
