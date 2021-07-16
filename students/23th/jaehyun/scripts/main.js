const searchInput = document.getElementsByClassName("searchInput")[0];
const searchIcon = document.getElementsByClassName('searchIcon')[0];
const searchText = document.getElementsByClassName('searchText')[0];

function home() {
    window.location.reload();
}

function inputPostionMove() {
    searchIcon.style.left = '10px';
    searchText.style.left = '20px';
}

searchInput.addEventListener('input', e => {
    searchText.style.visibility = 'hidden';
})