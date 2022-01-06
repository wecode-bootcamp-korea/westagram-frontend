window.onload = function () {
    let writeBox = document.getElementsByClassName("feed-comment-write");
    for (let i = 0; i < writeBox.length; i++) {
        writeBox[i].addEventListener('keydown', function (e) {
            if (e.code === 'Enter') {
                let addTag = document.createElement('span'); addTag.innerHTML =
                    `<span><strong>wecode</strong> ${writeBox[i].value}</span><div><i class='fas fa-heart' onclick='heartColorChange(this)'></i><button onclick=deleteComment(this) 
                    class = 'border-none background-none'>삭제</button></div>`
                writeBox[i].parentNode.parentNode.children[5].appendChild(addTag)
                writeBox[i].parentNode.children[0].value = '';
            }
        })
    }
}

const searchButton = document.getElementById('nav-bar-search');
const navDetail = document.getElementsByClassName('nav-detail')[0];

const instaId = [
    { id: 'wecode1', introduction: '반갑습니다', img: "./img/example1.jpg" },
    { id: 'wde12', introduction: '위코드', img: "./img/example2.jpg" },
    { id: 'ode1', introduction: '반갑', img: "./img/example1.jpg" },
    { id: 'line', introduction: '라인', img: "./img/example3.jpg" },
    { id: 'hi', introduction: '반갑습다', img: "./img/example1.jpg" },
    { id: 'wecode_korea', introduction: '위코드 코리아', img: "./img/example4.jpg" },
    { id: 'wecode_founder', introduction: '위코드 설립자', img: "./img/example5.jpg" },
    { id: 'wecode_bootcamp', introduction: '부트캠프', img: "./img/example6.jpg" },
    { id: 'Wecode', introduction: 'hi', img: "./img/example7.jpg" },
    { id: 'suuu', introduction: 'hello', img: "./img/example8.jpg" },
    { id: 'banana', introduction: 'bbbbbb', img: "./img/example1.jpg" },
    { id: 'apple', introduction: '@@@~~~~', img: "./img/example2.jpg" }
];

navDetail.style.opacity = 0

searchButton.addEventListener('keyup', searchId);

function fnComment(buttonInfo) {
    let addTag = document.createElement('span');
    let text = buttonInfo.parentNode.children[0].value;
    addTag.innerHTML = `<span><strong>wecode</strong> ${text}</span><div><i class='fas fa-heart' onclick='heartColorChange(this)'></i><button onclick=deleteComment(this) 
                    class = 'border-none background-none'>삭제</button></div>`
    buttonInfo.parentNode.parentNode.children[5].appendChild(addTag);
    buttonInfo.parentNode.children[0].value = '';

}

function heartColorChange(heart) {
    if (heart.style.color === '' || heart.style.color === 'gray') heart.style.color = 'red';
    else heart.style.color = 'gray';
}

function deleteComment(comment) {
    comment.parentNode.parentNode.remove()
}

function searchId() {
    if (searchButton.parentNode.children.length > 1) searchButton.parentNode.children[1].remove();

    let data = instaId.filter(function (v) {
        return v.id.includes(searchButton.value);
    });;

    let divTag = document.createElement('div');
    divTag.className = 'search-list'
    divTag.innerHTML = ''

    for (let i = 0; i < data.length; i++) {
        divTag.innerHTML += `<div class="search-list-model">
                            <img alt = 'search-list-img' src="${data[i].img}" class="aside-img img-border-circle">
                            <div class="aside-img-owner">
                                <p>${data[i].id}</p>
                                <span>${data[i].introduction}</span>
                            </div>
                        </div>`
    }
    searchButton.parentNode.appendChild(divTag)

}

document.addEventListener('click', function (e) {
    if (e.target.className != '-inputsearch') {
        if (searchButton.parentNode.children.length > 1) {
            searchButton.parentNode.children[1].remove();
            searchButton.value = '';
        }

    }
    if (e.target.className != 'profile-img') navDetail.style.opacity = 0;

})

function openNavDetail() {
    navDetail.style.opacity = 1
}