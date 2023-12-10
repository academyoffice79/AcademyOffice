document.addEventListener('DOMContentLoaded', () => {
  
    const getSearchBar = 
        document.querySelector('#searchBar');
    const getAllMovies = 
        document.querySelectorAll('.movieWrapper');

    getSearchBar.addEventListener('keyup', e => {
        getAllMovies.forEach(movie => {
            if (movie.innerText.toLowerCase().includes(e.target.value.toLowerCase())){
                movie.style.display = 'block';
                return movie;
            }
            else {
                movie.style.display = 'none';
            }
        });
    });
});