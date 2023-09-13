import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL API: https://api.themoviedb.org/3/movie/now_playing?api_key=b05f88079815fb3b4056f99e424cfed8&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
