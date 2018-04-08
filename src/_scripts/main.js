import { changeHtml } from './change'
import { counterPrev, counterNext } from './counter'
import { doc } from './namespace'
import { data } from './data'
import { counter } from './counter'

window.addEventListener('load', () => {

  const buttonPrev = document.querySelector('.control__prev');
  const buttonNext = document.querySelector('.control__next');

  $('.slider').slick({
    arrows: false,
    draggable: false,
    infinite: false
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
    if ( counter === 0 ) return;

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
    if ( counter === data.length - 1 ) return;

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

  let prevSlide;
  $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    prevSlide = currentSlide;
    slick.$slides[nextSlide].classList.add('normalZoom');
  });
  $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    slick.$slides[prevSlide].classList.remove('normalZoom');
  });



});

