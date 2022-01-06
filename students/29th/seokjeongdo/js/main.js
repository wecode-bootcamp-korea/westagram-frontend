const textarea = document.querySelector('textarea')
const submitBtn = document.querySelector('.submitBtn')
const commentWrap = document.querySelector('.post__comment__guest-Wrap')
const guestName = document.querySelector('.guset__name')
const guest__comment = document.querySelector('.guset__comment')
const toggleLike = document.querySelectorAll('.heart')

const textareaControll = (e) => {
  textarea.style.height = '27px'
  let scHeight = e.target.scrollHeight
  textarea.style.height = `${scHeight}px`
}

const addComment = (e) => {
  const comment = textarea.value
  const commentGuestWrap = document.createElement('div')
  commentGuestWrap.setAttribute('class', 'post__comment__guest')

  const commentGuest = document.createElement('div')
  commentGuest.setAttribute('class', 'post__comment__guest-info')

  const commentGuestInfo = document.createElement('div')
  commentGuestInfo.setAttribute('class', 'post__comment__guest-info')

  const guestLink = document.createElement('a')
  guestLink.setAttribute('class', 'guest__name')
  guestLink.innerHTML = 'Seokkitdo'

  const commentP = document.createElement('p')
  commentP.setAttribute('class', 'guest__comment')
  commentP.innerHTML = comment

  const i = document.createElement('i')
  i.setAttribute('class', 'far fa-heart')

  const heartBtn = document.createElement('button')
  heartBtn.setAttribute('class', 'rmBack')
  heartBtn.appendChild(i)

  commentWrap.appendChild(commentGuestWrap)
  commentGuestWrap.appendChild(commentGuest)
  commentGuestWrap.appendChild(heartBtn)
  commentGuest.appendChild(guestLink)
  commentGuest.appendChild(commentP)

  textarea.value = ''
  textarea.focus()
}

textarea.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addComment()
  }
})

toggleLike.forEach((like) => {
  like.addEventListener('click', (e) => {
    if (like.classList.contains('fas')) {
      like.classList.remove('fas')
      like.classList.add('far')
      like.classList.add('on')
    } else {
      like.classList.remove('far')
      like.classList.add('fas')
    }
  })
})

textarea.addEventListener('keyup', textareaControll)
submitBtn.addEventListener('click', addComment)
