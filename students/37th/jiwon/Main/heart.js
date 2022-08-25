const heart = document.getElementById("feed-heart");

console.log(heart);
const handleFeedHeartClick = () => {
  heart.src = "https://cdn-icons-png.flaticon.com/512/1076/1076984.png";
};

heart.addEventListener("click", handleFeedHeartClick);
