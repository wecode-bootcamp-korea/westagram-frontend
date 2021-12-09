const feedControler = document.querySelector('.feed-controler');
const feedHeartIcon = feedControler.querySelector('.fa-heart');

const commentList = document.querySelector('.feed-comment-list');
let commentHeartIcons = commentList.querySelectorAll('.fa-heart');

const detectAndChangeHeartIcons = () => {
  commentHeartIcons = commentList.querySelectorAll('.fa-heart');
  commentHeartIcons.forEach((commentHeartIcon, index) => {
    console.log(commentHeartIcon);
    commentHeartIcon.addEventListener('click', () => {
      console.log(index);
    });
  });
};

const feedCommentObserver = new MutationObserver(detectAndChangeHeartIcons);

feedCommentObserver.observe(commentList, {
  childList: true,
});

commentHeartIcons.forEach((commentHeart) => {
  commentHeart.addEventListener('click', (event) => console.log('들어옴'));
});
