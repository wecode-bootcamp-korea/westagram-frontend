let content = document.getElementsByClassName("contentText");

let contentText = document.getElementsByClassName("contentText")[0];

let contentTextString = contentText.textContent;
let result = contentTextString.trim();

let contentLength = contentTextString.length;

console.log(content);
console.log(contentText);
console.log(result);
console.log(contentLength);

let seeMoreElement = document.getElementsByClassName("seeMoreContent")[0];


function appearSeeMoreContent() {
  let shortText = result.slice(0, 12);
  if (contentLength >= 12) {
    contentText.innerHTML = shortText;
    seeMoreElement.style.display = "block";
  }
}

appearSeeMoreContent();

let contentSectionElement = document.getElementById('contSection');

seeMoreElement.addEventListener('click', function(e) {
    contentText.innerHTML = result;
    seeMoreElement.style.display = "none";
    contentSectionElement.style.display = "block";


})


console.log(typeof contentTextString);
console.log(contentTextString.slice(15, 35));
