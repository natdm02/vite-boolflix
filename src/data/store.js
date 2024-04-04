import {reactive} from 'vue';

export const store = reactive({

  // API
  apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=e277bf0162d339ea5d288d0fce380841aae38e77&language=it-IT",

  apiUrlTv: "https://api.themoviedb.org/3/search/tv?api_key=e277bf0162d339ea5d288d0fce380841aae38e77&language=it-IT",

  apiUrlPopular: "https://api.themoviedb.org/3/movie/popular?api_key=e277bf0162d339ea5d288d0fce380841aae38e77&language=it-IT",
  
  
  searchTitle: '',

  filmArray: [],
  seriesArray: [],
  popularArray: [],

  isLoad: false,


})