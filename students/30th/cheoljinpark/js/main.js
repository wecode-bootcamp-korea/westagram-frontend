const commentBox = document.getElementsByClassName('feed-commantlist')[0];

commentBox.addEventListener('keydown', function(e) {
  
  if (e.KeyCode == 13) {
    commentBox.appendChild('li');
  } 
});