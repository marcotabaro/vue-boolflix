const API_KEY = b1c34fb435544b294b8ba79826dd86ac;

const rootApp = new Vue ({
    el:"#root",
    data: {
      allMovies: [],
      Searched: ''
    },
  
    mounted() {
      axios.get("https://api.themoviedb.org/3/search/movie")
      
      .then (result => this.allMovies = result.data.response)
    }
  })