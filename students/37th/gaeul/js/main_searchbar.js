const searchForm = document.querySelector('.search-wrap');
const searchIcon = document.querySelector('#search-icon')
const searchInput = document.querySelector('.search-bar');

searchForm.addEventListener('keyup', () => {

  if(searchInput.value) {
    searchForm.removeChild(searchIcon);
  }

});