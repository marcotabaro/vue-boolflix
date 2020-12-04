const myApp = new Vue ({
    el:"#root",
    data: {
      allMovies: [],
      searched: '',
      stars: 5,
      apikey: 'b1c34fb435544b294b8ba79826dd86ac',
      uriImg: 'https://image.tmdb.org/t/p/w500/',
      nextPg: 1
    },
    methods: {
        movieSearch() {
          this.allMovies = []; //reset dell'array
          
      //Get for movie
      axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {'api_key': this.apikey,
                query: this.searched,
                page: this.nextPage,
      }})
      .then((response) => {this.allMovies = response.data.results;
      });

      //Get for Tv Series
      axios.get("https://api.themoviedb.org/3/search/tv",
      {params: {'api_key': this.apikey,
                query: this.searched,
                page: this.nextPage,
      }})
      .then(response => {this.allMovies = this.allMovies.concat(response.data.results);
      });
      },
      starRating(rate) {
        return Math.ceil(rate / 2);
      },
      notFound(el) {
        el.target.src = "img/notfound.png";
      },
      nextPage() {
        this.nextPg++;
        this.movieSearch();
        return this.nextPg;
      }
    },
    mounted() {
      axios.get("https://api.themoviedb.org/3/movie/popular", 
      {params:{'api_key': this.apikey,
                page: this.nextPage,
              }})
      .then(resp => {this.allMovies = resp.data.results;
      })
      }
  })

