<script>

import {store} from "../data/store";
import Card from "./Card.vue";

export default {
  name:'Main',
  components:{
    Card
  },

  data(){
    return {
    store,
   
    }
  },
}
</script>
<template>
  <h1>Main</h1>

  <body>
    <div class="fmcontainer test">

      <div class="container-fluid test2">


        <div class="row ">
          <Card
              v-for
              ="card in store.filmArray"
              :key="card.id"
              :title="card.title"
              :original_title="card.original_title"
              :original_language="card.original_language"
              :vote_average="card.vote_average" />

        </div>



        </div>

      </div>

  </body>

</template>
<style lang="scss" scoped>
  @use '../scss/main.scss' as *;
</style>