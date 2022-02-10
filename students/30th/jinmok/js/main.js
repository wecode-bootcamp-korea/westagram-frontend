const mainBox = document.getElementsByTagName('main')[0];
const navBox = document.getElementsByClassName('nav-box')[0];
const storyRecommand = document.getElementById('story-recommand');
navBox.style.width = String(mainBox.offsetWidth+storyRecommand.offsetWidth)+"px";
const commantsInput = document.getElementById('commants-area');

mainBox.style.transform = 'translateX(-'+(mainBox.offsetWidth+storyRecommand.offsetWidth)/2+'px)';
storyRecommand.style.transform = 'translateX('+(mainBox.offsetWidth-storyRecommand.offsetWidth)/2+'px)';

const mainNavigation = document.getElementById('main-navigation');
mainNavigation.style.height = String(navBox.offsetHeight)+"px";


function resize(obj) {
    obj.style.height = "18px";
    obj.style.height = obj.scrollHeight+"px";
}