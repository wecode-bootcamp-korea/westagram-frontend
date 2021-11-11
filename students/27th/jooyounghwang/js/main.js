const inputReviewForm = document.querySelector('.input-review-container');
const enterUploadBtn = document.querySelector('.review-upload-btn');
const reviewList = document.querySelector('.review-list');
const reviewInput = document.querySelector('.input-review');
const contentsBox = document.querySelector('contents');
const minimalContents = document.querySelector('.minimal-contents');
const strechContents = document.querySelector('.more-btn');

function paintReview(){
  const newReviewBox = document.createElement('p');
  const newReiviewId = document.createElement('span');
  const newReviewContents = document.createElement('span');
  const newLikeOfReview = document.createElement('span')
  reviewList.appendChild(newReviewBox);
  newReviewBox.appendChild(newReiviewId);
  newReviewBox.appendChild(newReviewContents);
  newReviewBox.appendChild(newLikeOfReview);
  newReiviewId.classList.add('review-id');
  newReviewContents.classList.add('review-contents');
  newLikeOfReview.classList.add('review-like');
  newReiviewId.innerText = 'Fix-ID';
  newReviewContents.innerText = reviewInput.value;
  reviewInput.value = '';
  newLikeOfReview.innerHTML = '<i class="far fa-heart"></i>'
}

function moreViewContents(){
  minimalContents.classList.toggle('minimal-contents');
}

function handleInputSubmit(event){
  event.preventDefault();
  paintReview()
}

inputReviewForm.addEventListener('submit', handleInputSubmit);
strechContents.addEventListener('click', moreViewContents);
