const myApp = new Vue ({
    el:"#root",
    data: {
      allMovies: [],
      searched: '',
      stars: 5,
      api_key: 'b1c34fb435544b294b8ba79826dd86ac',

      uriImg: 'https://image.tmdb.org/t/p/w500/'
    },
    methods: {
        movieSearch() {
      axios.get("https://api.themoviedb.org/3/search/movie", { params: {
            'api_key': this.api_key,
            query: this.searched
        }
      })
      .then (response => this.allMovies = response.data.results)
    },
        starRating(rate) {
          return Math.ceil(rate / 2);
        }
}
})