let userArr = [
    {id : 'tjdtnxkrmfoa' ,
    img : ''},
    {id : 'WeCode' ,
    img : ''},
    {id : 'Instagram' ,
    img : ''},
    {id : 'Holywater' ,
    img : ''},
    {id : 'JustCode' ,
    img : ''}
];

const searchInput = document.querySelector('header>input');
const searchBar = document.getElementById('searchBar');

function search(){
    let newarr = []
    if(searchInput.value != ""){
    newarr = userArr.filter(item=>
        item.id.includes(`${searchInput.value}`)
    )
    }else{ newarr = []
    }

    searchBar.innerHTML = ""
    newarr.map(item=>{
        let li = document.createElement('li');
        searchBar.appendChild(li);
        let span1 = document.createElement('span');
        let span2 = document.createElement('span');
        span1.innerText = `${item.id}`;
        span2.classList.add('userImg');
        li.appendChild(span2);
        li.appendChild(span1);
        
    }
        )
}
function searchbarShow(){
    searchBar.classList.remove('displaynone');
}
function searchBarHidden(){
    searchBar.classList.add('displaynone');
}
searchInput.addEventListener('input', search)
searchInput.addEventListener('focus', searchbarShow)
searchInput.addEventListener('blur', searchBarHidden)