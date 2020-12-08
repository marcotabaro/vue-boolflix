const myApp = new Vue ({
    el:"#root",
    data: {
      multiSearch: [],
      searched: '',
      stars: 5,
      apikey: 'b1c34fb435544b294b8ba79826dd86ac',
      uriImg: 'https://image.tmdb.org/t/p/w342/',
      currPage: 1,
      totPages: 1
    },
    methods: {
        search() {

         axios.get("https://api.themoviedb.org/3/search/multi", {
        params: {'api_key': this.apikey,
                query: this.searched,
                page: this.currPage,
      }})
      .then((response) => {this.multiSearch = response.data.results;
                           this.totPages = response.data.total_pages;
      });

    },
      starRating(rate) {
        return Math.ceil(rate / 2)
    },
      notFound(el) {
        el.target.src = "img/notfound.png"
    },
    scrollSearch() {
      window.onscroll = () => {
        let bottomWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if(this.currPage <= this.totPages){
        if (bottomWindow) {
          this.currPage++;
            axios.get("https://api.themoviedb.org/3/search/multi", {
            params: {'api_key': this.apikey,
                query: this.searched,
                page: this.currPage,
      },
    })
      .then((response) => {
        let array = response.data.results;
        this.multiSearch = [...this.multiSearch, ...array];
          });
        }
      }
    }
  }
},
    mounted() {
      this.scrollSearch();
        axios.get("https://api.themoviedb.org/3/movie/popular", 
        {params:{'api_key': this.apikey,
                  page: this.currPage,
                }})
        .then(response => {this.multiSearch = response.data.results;
          this.totPages = response.data.total_pages;
        })
  }
})

