import { changeHtml } from './change'
import { counterPrev, counterNext } from './counter'
import { doc } from './namespace'
import { data } from './data'

window.addEventListener('load', () => {

  const buttonPrev = document.querySelector('.control__prev');
  const buttonNext = document.querySelector('.control__next');
  let isAnimation = false;
  $('.slider').slick({
    arrows: false,
    draggable: false,
  });

  function sliderPrev() {
    $('.slider').slick('slickPrev');
  }

  function sliderNext() {
    $('.slider').slick('slickNext');
  }

  function addListener() {
    buttonPrev.addEventListener('click', prev );
    buttonNext.addEventListener('click', next );
  }

  function removeListener() {
    buttonPrev.removeEventListener('click', prev);
    buttonNext.removeEventListener('click', next );
  }

  addListener();

  function prev() {
    removeListener();
    counterPrev();
    changeHtml( doc, data );
    setTimeout(() => {
      sliderPrev()
    }, 1000);
    setTimeout(() => {
      addListener();
    }, 2400)
  }


  function next() {
    removeListener();
    counterNext();
    changeHtml( doc, data );
    setTimeout(() => {
      sliderNext();
    }, 1000);
    setTimeout(() => {
      addListener();
    }, 2400)
  }





});

