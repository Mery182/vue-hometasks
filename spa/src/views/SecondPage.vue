<template>
<second-blok/>




</template>

<script>
import SecondBlok from '@/components/SecondBlok.vue'

export default {
  components: { 
      SecondBlok
      }
}
</script>

<style scoped>
 input[type='text']{
   
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
    color: white;
  }
</style>