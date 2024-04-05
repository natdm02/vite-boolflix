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
  <div class="wrapper">
  <div class="fm-card col mb-3">

    
    <div class="front">
      <img v-if="image != null" :src="`https://image.tmdb.org/t/p/w342${image}`" :alt="original_title" :title="original_title">
      
    </div>
      <div class="cont-info p-2 d-flex j-cont-cent">
        <div class="info pt-3 al-item-cent">
          <h1 class="py-1">{{ title }}</h1>
          <h2 class="py-1">{{ original_title }}</h2>
    

          <span>Lingua:</span>
          <img :src="`/src/assets/img/flags/language-${original_language}.svg`" class="ms-2 flag" :alt="original_language" :title="original_language">

       
          <!-- stelle piene -->
          <div class="me-2 mt-2">Media voti:
            <span v-for="starSolid in vote_average" :key="starSolid"><i class="fa-solid fa-star" style="color: #f2ca28;"></i></span>

          <!-- le stelle vuote -->
          <span v-for="starEmpty in (5-vote_average)" :key="starEmpty"><i class="fa-regular fa-star"></i></span>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss' as *;

.fm-card{
  text-align: center;

  img{
    height: 445px;
  }

    .cont-info{
    background-color: gray;

    .info{
      min-height: 250px;
  
      h1{
        font-size: 1.6rem;
      }
  
      h2{
        font-size: 1.2rem;
      }
  
      img{
        height: 15px;
      }
    }
  }

    h5{
      color: white;
      font-size: .8rem;
      font-weight: 700;
      text-transform: uppercase;
    }

  }

</style>





