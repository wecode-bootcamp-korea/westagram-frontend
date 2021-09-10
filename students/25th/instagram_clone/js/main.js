

const contents = document.getElementById('commentText')
const profileBtn = document.getElementById('profileBtn')
const profileMenu = document.getElementsByClassName('profileMenu')[0]
const searchBar = document.getElementsByClassName('search')[0]
const searchList = document.getElementsByClassName('searchList')[0]


//  add comment

const addComment = () => {
    if (contents.value) {
        // end root
        const commentList = document.getElementsByClassName('commentList')[0]

        // create nodes
        const comment = document.createElement('div') // wrapping tag
        const postLeft = document.createElement('div') // wrapping tag
        const userName = document.createElement('a')
        const text = document.createElement('span')

        const postRight = document.createElement('div') // wrapping tag
        const likeBtn = document.createElement('button')
        const delBtn = document.createElement('i')
    

        // element nodes class
        comment.classList = 'comment'
        userName.classList = 'name'
        text.classList = 'content'

        postRight.classList = 'postRight'
        likeBtn.classList = 'likeBtn'
        delBtn.classList = "far fa-trash-alt"
        

        // text 삽입 
        userName.innerText = 'Acidity'
        text.innerText = contents.value
        likeBtn.innerText = '♥'

        // 상속 관계 정리
        postLeft.appendChild(userName)
        postLeft.appendChild(text)
        comment.appendChild(postLeft)

        postRight.appendChild(likeBtn)
        postRight.appendChild(delBtn)
        comment.appendChild(postRight)
        
        // html 삽입
        commentList.appendChild(comment)

        // 삭제 버튼 이벤트

        delBtn.addEventListener('click', (event) => {
            const btn = event.target
            const delAll = btn.parentElement.parentElement
            delAll.remove()
        })

        // 좋아요 버튼 이벤트

        likeBtn.addEventListener('click', (event) => {
            const btn = event.target
            btn.classList.toggle('onLike')
        })
    }
    contents.value = ''
}


// comment by enter

const commentEnter = (e) => {
    if (e.code === 'Enter') {
        addComment()
    }
}

const profileMenuToggle = () => {
    profileMenu.classList.toggle('visNone')
}


// searching algorithm

// user : class
class user {
    constructor(nickname, introduce, img) {
        this.nickname = nickname
        this.introduce = introduce
        this.img = img
    }
}

// user data : obj
const acid = new user('acid', 'FrontEndDev', 'https://ca.slack-edge.com/TH0U6FBTN-U02808S0GCF-31acdd48834c-512')
const fairy_yoon = new user('fairy_yoon', 'FrontEndDev', 'https://ca.slack-edge.com/TH0U6FBTN-U0288815M5L-83cffa237ed7-512')
const mj_bro = new user('mj_bro', 'FrontEndDev', 'https://ca.slack-edge.com/TH0U6FBTN-U028F6M33TM-0b35e2ac4357-512')
const before_sun = new user('before_sun', 'FrontEndDev', "https://ca.slack-edge.com/TH0U6FBTN-U028TKWDUGZ-127382dc96e8-512")
const zzoozzoo_boy = new user('zzoozzoo_boy', 'FrontEndDev', "https://ca.slack-edge.com/TH0U6FBTN-U028F6LHV2P-2b70ab7b7419-512")
const sergeant_yang =  new user('sergeant_yang', 'BackEndDev', "https://ca.slack-edge.com/TH0U6FBTN-U028F0LER42-390940eb15a3-512")

const usersData = [acid, fairy_yoon, mj_bro, before_sun, zzoozzoo_boy, sergeant_yang]

const searchEngine = () => {
    const filterData = usersData.filter(a => a.nickname.indexOf(searchBar.value) >= 0)
    return filterData
}   


const makeUserLi = (el) => {
    const user = document.createElement('li') // wrapping
    const userImg = document.createElement('img')

    const textLine = document.createElement('div') // wrapping
    const userName = document.createElement('span')
    const explain = document.createElement('span')

    // add class
    textLine.classList = 'textLine'
    explain.classList = 'explain'

    // add text
    userImg.src = el['img']
    userName.innerText = el['nickname']
    explain.innerText = el['introduce']

    // structure
    textLine.appendChild(userName)
    textLine.appendChild(explain)

    user.appendChild(userImg)
    user.appendChild(textLine)

    return user
}


const updateList = () => {
    const filteredList = searchEngine()

    while (searchList.childElementCount >= 1) {
        searchList.removeChild(searchList.firstChild)
    }

    if (searchBar.value) {
        filteredList.forEach(el => {
            searchList.appendChild(makeUserLi(el))
        });
    }
}

const searchListToggle = () => {
    if (searchList.childElementCount >= 1) {
       searchList.classList.remove('visNone')
       return
    }
    searchList.classList.add('visNone')
}