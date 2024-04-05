import {reactive} from 'vue';

export const store = reactive({

  //  API
  apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=748c8a422de611aa57a7986e04923085&language=it-IT",

  apiUrlTv: "https://api.themoviedb.org/3/search/tv?api_key=748c8a422de611aa57a7986e04923085&language=it-IT",

  apiUrlPopular: "https://api.themoviedb.org/3/movie/popular?api_key=748c8a422de611aa57a7986e04923085&language=it-IT",
  
  searchTitle: '',

  
  filmArray: [],
  seriesArray: [],
  popularArray: [],

  isLoad: false,


})