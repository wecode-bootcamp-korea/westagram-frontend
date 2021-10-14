const heartIcon = document.getElementsByClassName('.replyLikeIcon');

for (i = 0; i < heartIcon.length; i++) {
  heartIcon[i].addEventListener('click', () => {
    return (heartIcon[i].style.color === "red" ? heartIcon[i].style.color = "black" : heartIcon[i].style.color = "red")
  })
}

