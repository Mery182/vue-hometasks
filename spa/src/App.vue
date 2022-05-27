<template>
<div class="about-blok">
<img src="../src/assets/play-svgrepo-com.svg" width="30" alt="">
<div>
<h1>VUE</h1>
<span>Создай задачу</span>
</div>
</div>
<!-- <first-blok/> -->
 <router-view/>
 <ul class="loop">
  <li :class="{active: !(this.$store.state.name == '')}">◉</li>
  <li :class="{active: !(this.$store.state.description == '')}">◉</li>
  <li :class="{active: !(this.$store.state.time == null)}">◉</li>
  <li :class="{active: !(this.$store.state.man == '')}">◉</li>
    <li :class="{active: !(this.$store.state.file == '')}">◉</li>
</ul>
</template>


<script>
// import FirstBlok from './views/FirstBlok.vue'
// import FirstPage from './views/FirstPage.vue'

export default {
 // components: { FirstBlok },
   data(){
     return {
     
     }
   },
  

}
</script>


<style>
.active {
  color: #48ffff;
  text-shadow: 0 0 5px beige;
 
}
body {
margin: 0;
height: 100vh;
background-color: #0093E9;
color: #fff;
background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 50%, #ffffff 100%);
}

h2 {
  text-align: left;
 
}
ul.loop {
  display: flex;
  justify-content: center;
  margin:0;
  padding: 0;
}
ul.loop li {
 padding: 10px;
 list-style-type: none;
}
a {
  text-decoration: none;
}
.margin-50{
  margin-top: 50px;
}
#app {
  max-width: 900px;
  height: auto;
  margin: 100px auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #2c3e501a;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}
.about-blok {
  text-align: left;
  display: flex;
  padding: 30px;
}
.about-blok span {
  opacity: 0.2;
}
.about-blok h1 {
margin-bottom: 0;
     /* background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}
.task-blok {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
}
/* start button style */
.blok-button {
  display: flex;
  justify-content:space-between;
}
 .btn-grad {
     background-image: linear-gradient(to right, #f9fbe7 0%, #26D0CE  51%, #1A2980  100%)
    }
 .btn-grad {
   width: 300px;
    padding: 15px 45px;
    margin-top: 30px;
    text-align: center ;
    transition: 0.5s;
    background-size: 200% auto;
    color: #61b4c0;            
    border-radius: 8px;
    display: block;
    border-style: none;
    cursor: pointer;
 
    
  }
  .btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
   .btn {
   width: 300px;
    padding: 15px 45px;
    margin-top: 30px;
    text-align: center ;
    transition: 0.5s;
    background-size: 200% auto;
    color: #ffffff;            
    border-radius: 8px;
    display: block;
    border:1px solid rgb(255, 255, 255);
    cursor: pointer;
 
    
  }
  .delete_button {
      margin: 0 auto;
  }
  @media screen and (max-width:768px){
    #app {
 width: 90%;
height: 70%;
    }
.blok-button {
  flex-direction: column;
}
.btn-grad {
  margin-top: 10px;
  width: 200px;
   margin-left: auto;
   margin-right: auto;
}
 .btn {
   width: 200px;
   margin-left: auto;
   margin-right: auto;
   
 }
  }
 /* the end */
</style>
