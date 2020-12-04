const myApp = new Vue ({
    el:"#root",
    data: {
      allMovies: [],
      searched: '',
      stars: 5,
      apikey: 'b1c34fb435544b294b8ba79826dd86ac',
      uriImg: 'https://image.tmdb.org/t/p/w500/'
    },
    methods: {
        movieSearch() {

      //Get for movie
      axios.get("https://api.themoviedb.org/3/search/movie",
      {params: {api_key: this.apikey,
                query: this.searched,
                language: 'it'
      }})
      .then(response => {this.allMovies = this.allMovies.concat(response.data.results);
      });

      //Get for Tv Series
      axios.get("https://api.themoviedb.org/3/search/tv",
      {params: {api_key: this.apikey,
                query: this.searched,
                language: 'it'
      }})
      .then(response => {this.allMovies = this.allMovies.concat(response.data.results);
      });
      },
      starRating(rate) {
        return Math.ceil(rate / 2);
      },
      notFound(el) {
        el.target.src = "img/notfound.png";
      }
    }
})