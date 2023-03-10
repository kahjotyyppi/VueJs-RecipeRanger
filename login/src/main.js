import {createApp} from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


const app = createApp(App);
app.use(BootstrapVue3);
app.mount('#app');


const store = createStore({
    storedIngredients() {
        return {
            storedIngredients: [''],
        }
    },
    storedCheckboxes() {
      return {
        storedCheckboxes: ['']
      }
    },
    mutations: {
        add (storedIngredients, ingredients) {
          this.storedIngredients = ingredients;
        },
        addCheckBoxes (storedCheckboxes, ingredients) {
          this.storedCheckboxes = ingredients;
        }
      }
})
app.use(store);
