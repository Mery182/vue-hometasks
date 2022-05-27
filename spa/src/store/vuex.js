import { createStore } from 'vuex'

// Create a new store instance.
 const store = createStore({
    state: {   
            name: '',
            description: '',
            time: null,
            man: '',
            file: '',       
    },
    mutations: {
     change(state){
        state.name = this.$store.state.name;
        state.description = this.$store.state.description;
        state.time = this.$store.state.time;
        state.man = this.$store.state.man;
       // state.file =  this.$store.stat
     },
    },
  })

  export default store