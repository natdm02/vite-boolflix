<script>
export default {
  name: 'Card',
  props:{
    image: String,
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number
  }
}
</script>

<template>
  <div class="fm-card col mb-3">

    
    <img v-if="image != null" :src="`https://image.tmdb.org/t/p/w342${image}`" :alt="original_title" :title="original_title">
    

      <div class="info pt-2">
        <h4 class="py-1">{{ title }}</h4>
        <h6 class="py-1">{{ original_title }}</h6>

        <span>Lingua:</span>
          <img :src="`/src/assets/img/flags/language-${original_language}.svg`" class="ms-2" :alt="original_language" :title="original_language">

          <!-- stelle piene -->
          <span class="me-2">Media voti:</span>
          <span v-for="starSolid in vote_average" :key="starSolid"><i class="fa-solid fa-star" style="color: #f2ca28;"></i></span>

          <!-- le stelle vuote -->
          <span v-for="starEmpty in (5-vote_average)" :key="starEmpty"><i class="fa-regular fa-star"></i></span>
        </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss' as *;

.fm-card{
  text-align: center;
  

  .info{
    background-color: gray;
    min-height: 130px;

    h5{
      color: white;
      font-size: .8rem;
      font-weight: 700;
      text-transform: uppercase;
    }

  }

}


</style>