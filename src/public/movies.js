var moviesAPI = 'http://localhost:3000/movies'

document.addEventListener('DOMContentLoaded', (event) => {
   
    //* Gọi callback
    
        function start(){
            getMovies(renderMovies)
        }
        
        start()
        
        //* Function get movies
        function getMovies(callback){
            fetch(moviesAPI)
                .then(function(response){
                    return response.json()
                })
                .then(callback)
        }
           
        function renderMovies(movies){
        
            //* Lấy ra danh sách phim đang hot
            var moviesBlock = document.querySelector('.index .container1 .index-movies .trending .movies-slider .embla-container')
            console.log(moviesBlock)
            var moviesHtmls = movies.map(function(movie){
                return `
                <li class="embla__slide movies-list">
                            <a href="/movies/watch-detail.html" class="movies-item">
                                <img class="movies-img" src="${movie.image}" alt="">
                            </a>
                            <div class="tittle-movies">
                                <div class="tittle">${movie.title}
                                    <p>${movie.year}</p>
                                </div>
                                <div class="watch-btn">
                                    <a style="position: relative" href="${movie.embedUrls[2].url}">
                                        <button class="watchnow">Watch now</button>
                                    </a>
                                    <div class="add-btn">
                                        <img class="plus-btn" src="./image/plus1.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </li>
                    `;
            })
            moviesBlock.innerHTML = moviesHtmls.join('')
        } 
    })
