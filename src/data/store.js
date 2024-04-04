import {reactive} from 'vue';

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=748c8a422de611aa57a7986e04923085&language=it-IT",

  searchTitle: 'Breaking',
  filmArray: [],
  isLoad: true

})