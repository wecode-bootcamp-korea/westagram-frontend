window.onload = function () {
    // 댓글달기 엔터 이벤트
    let writeBox = document.getElementsByClassName("feed-comment-write");
    for (let i = 0; i < writeBox.length; i++) {
        writeBox[i].addEventListener('keydown', function (e) {
            if (e.code === 'Enter') {
                let addTag = document.createElement('span'); addTag.innerHTML =
                    `<span><strong>wecode</strong> ${writeBox[i].value}</span><div><i class='fas fa-heart' onclick='likeFn(this)'></i><button onclick=deleteComment(this) 
                    class = 'border-none background-none'>삭제</button></div>`
                writeBox[i].parentNode.parentNode.children[5].appendChild(addTag)
                writeBox[i].parentNode.children[0].value = '';
            }
        })
    }
}
const navDetail = document.getElementsByClassName('nav-detail')[0];
navDetail.style.opacity = 0
// 댓글 게시 버튼 이벤트
function fnComment(buttonInfo) {
    let addTag = document.createElement('span');
    let text = buttonInfo.parentNode.children[0].value;
    addTag.innerHTML = `<span><strong>wecode</strong> ${text}</span><div><i class='fas fa-heart' onclick='likeFn(this)'></i><button onclick=deleteComment(this) 
                    class = 'border-none background-none'>삭제</button></div>`
    buttonInfo.parentNode.parentNode.children[5].appendChild(addTag);
    buttonInfo.parentNode.children[0].value = '';

}


// 하트 색상 변경 이벤트
function likeFn(heart) {
    // console.log(heart);
    // console.dir(heart);

    if (heart.style.color === '' || heart.style.color === 'gray') heart.style.color = 'red';
    else {
        heart.style.color = 'gray';

    }

}

// 댓글 삭제 이벤트 
function deleteComment(comment) {
    // console.dir(comment)
    comment.parentNode.parentNode.remove()
}


//search 이벤트
const searchButton = document.getElementById('input-search');
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
searchButton.addEventListener('keyup', fnSearch);

function fnSearch() {
    console.dir(searchButton.parentNode)
    if (searchButton.parentNode.children.length > 1) {
        console.log('지우기')
        searchButton.parentNode.children[1].remove();

    }
    // console.log('search')
    // console.log(searchButton.value)
    let data = instaId.filter(function (v) {
        return v.id.includes(searchButton.value);
    });;
    // console.log(data);
    // console.log(searchButton.parentNode)
    let divTag = document.createElement('div');
    divTag.className = 'search-list'
    divTag.innerHTML = ''
    for (let i = 0; i < data.length; i++) {
        divTag.innerHTML += `<div class="search-list-model">
                            <img src="${data[i].img}" class="aside-img img-border-circle">
                            <div class="aside-img-owner">
                                <p>${data[i].id}</p>
                                <span>${data[i].introduction}</span>
                            </div>
                        </div>`
    }
    searchButton.parentNode.appendChild(divTag)

}


//
searchButton.addEventListener('click', function (e) {
    // console.log('서치버튼')
    // console.log(e)
    // console.log(e.target)
    // console.log(e.currentTarget)

})


document.addEventListener('click', function (e) {
    console.dir(e.target.className)
    console.dir(e.currentTarget)
    console.log(e.currentTarget)
    if (e.target.className != 'input-search') {
        if (searchButton.parentNode.children.length > 1) {
            searchButton.parentNode.children[1].remove();
            searchButton.value = ''
        }

    }
    if (e.target.className != 'profile-img') {
        console.log('여기')
        console.log(navDetail.style.opacity)

        navDetail.style.opacity = 0

    }

})


// 네비바 디테일 열기
function openNavDetail() {
    console.log('여기')
    console.log(navDetail.style.opacity)
    if (navDetail.style.opacity === 0 || navDetail.style.opacity === '')
        console.log('whrjsans')
    navDetail.style.opacity = 1
}