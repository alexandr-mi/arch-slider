import { changeHtml } from './change'
import { counterPrev, counterNext } from './counter'
import { doc } from './namespace'
import { data } from './data'
import { counter } from './counter'

window.addEventListener('load', () => {

  const buttonPrev = document.querySelector('.control__prev');
  const buttonNext = document.querySelector('.control__next');

  for (let i = 1; i <= data.length; i++) {
    let counter__step = document.createElement('div');
    counter__step.classList.add('counter__step');
    counter__step.innerHTML = `0${i}`;
    doc.counter__currentStep.appendChild(counter__step);
  }

  doc.counter__allStep.innerHTML = `0${data.length}`;

  $('.slider').slick({
    arrows: false,
    draggable: false,
    infinite: false,
    speed: 400
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
    }, 700);
    setTimeout(() => {
      addListener();
    }, 1250)
  }


  function next() {
    if ( counter === data.length - 1 ) return;
    removeListener();
    counterNext();
    changeHtml( doc, data );
    setTimeout(() => {
      sliderNext();
    }, 700);
    setTimeout(() => {
      addListener();
    }, 1250)
  }

  let prevSlide;
  $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    prevSlide = currentSlide;
    slick.$slides[nextSlide].classList.add('normalZoom');
  });
  $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    slick.$slides[prevSlide].classList.remove('normalZoom');
    doc.counter__currentStep.style.top = `-${currentSlide * 16}px`;
  });



});

