searchInput = document.getElementsByClassName("searchInput")[0];
searchIcon = document.getElementsByClassName('searchIcon')[0];
searchText = document.getElementsByClassName('searchText')[0];

function home(){
    window.location.reload();
}

function inputPostionMove() {
    searchIcon.style.left = '10px';
    searchText.style.left = '20px';
}

searchInput.addEventListener('keyup', e => {
    searchText.style.visibility = 'hidden';
})