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
<div class="wrapper mb-4">
  <div class="fm-card">

    <div class="front">
      <img v-if="image != null" :src="`https://image.tmdb.org/t/p/w300${image}`" :alt="original_title" :title="original_title">
    </div>
      <div class="cont-info p-2 d-flex j-cont-cent">
        <div class="info pt-3 al-item-cent">
          <h1 class="py-1">{{ title }}</h1>
          <h2 class="py-1"> Titolo Originale: {{ original_title }}</h2>

          <span>Lingua:</span>
            <img :src="`/src/assets/img/flags/language-${original_language}.svg`" class="ms-2 flag" :alt="original_language" :title="original_language">

            <!-- stelle piene -->
          <div class="me-2 mt-2">Media voti:
            <span v-for="starSolid in vote_average" :key="starSolid"><i class="fa-solid fa-star" style="color: #f2ca28;"></i></span>

            <!-- stelle vuote -->
            <span v-for="starEmpty in (5-vote_average)" :key="starEmpty"><i class="fa-regular fa-star"></i></span>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss' as *;


.wrapper, .fm-card {
	position: relative;
}
.wrapper {
	perspective: 900px;
}

.wrapper:hover .fm-card {
	transform: rotateY(180deg);
}
.front, .cont-info {
	width: 100%;
	position: relative;
	top: 0;
	left: 0;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
  border-radius: 10px;
}
.front {
	cursor: pointer;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}
.cont-info {
	transform: rotateY(180deg);
	position: absolute;
	height: 100%;
	background: #fff;
}
.info {
	padding-top: 25%;
}



.fm-card{
  text-align: center;
  cursor: pointer;
	transition: all 1.5s cubic-bezier(0.7, -0.5, 0.3, 1.8);
	transform-style: preserve-3d;
  
  
  img{
    object-fit: contain;
    height: 330px;
    border-radius: 10px;
  }

  

  .cont-info{
    background-image: linear-gradient(to right, #ff9a9e, #fad0c4);

    .info{
      min-height: 250px;
  
      h1{
        font-size: 1.4rem;
      }
  
      h2{
        font-size: 1rem;
      }
  
      img{
        height: 15px;
      }
    }
  }
  h5 {
  color: #333; 
  font-size: 1rem; 
  font-weight: 600; 
  text-transform: uppercase; 
  letter-spacing: 1px; 
}

}


</style>