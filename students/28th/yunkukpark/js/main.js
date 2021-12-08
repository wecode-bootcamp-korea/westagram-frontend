const main = document.querySelector('main');
const mainLeft = document.querySelector('.main-left');
const mainRight = document.querySelector('.main-right');

const setLayout = () => {
  const mainLeftXoffset = mainLeft.offsetLeft;
  const mainLeftWidth = mainLeft.offsetWidth;
  const mainLeftMarginRight = 28;

  const mainRightXoffset = `${mainLeftXoffset + mainLeftWidth + mainLeftMarginRight}px`;
  mainRight.style.left = mainRightXoffset;
};

window.addEventListener('load', setLayout);
window.addEventListener('resize', setLayout);
