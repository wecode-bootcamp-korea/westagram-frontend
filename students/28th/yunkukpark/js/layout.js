(() => {
  const setLayout = () => {
    const mainLeft = document.querySelector('.main-left');
    const mainRight = document.querySelector('.main-right');

    const mainLeftXoffset = mainLeft.offsetLeft;
    const mainLeftWidth = mainLeft.offsetWidth;
    const mainLeftMarginRight = 28;

    const mainRightXoffset = `${mainLeftXoffset + mainLeftWidth + mainLeftMarginRight}px`;

    mainRight.style.left = mainRightXoffset;
  };

  // Window 관련 EventListener
  window.addEventListener('load', setLayout);
  window.addEventListener('resize', setLayout);
})();
