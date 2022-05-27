<template>
<third-blok/>




</template>

<script>
import ThirdBlok from '@/components/ThirdBlok.vue'

export default {
  components: { 
      ThirdBlok
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