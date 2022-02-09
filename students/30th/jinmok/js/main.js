const mainBox = document.getElementsByTagName('main')[0];
const navBox = document.getElementsByClassName('nav-box')[0];
const storyRecommand = document.getElementById('story-recommand');
navBox.style.width = String(mainBox.offsetWidth+storyRecommand.offsetWidth)+"px";

mainBox.style.transform = 'translateX(-'+(mainBox.offsetWidth+storyRecommand.offsetWidth)/2+'px)';

const mainNavigation = document.getElementById('main-navigation');
mainNavigation.style.height = String(navBox.offsetHeight)+"px";
