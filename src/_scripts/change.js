import {counter} from './counter'

function changeTitleName( document, data ) {
  document.basicDescription__title_name.classList.add('active');
  setTimeout(() => {
    document.basicDescription__title_name.innerHTML = data[counter].basicDescription__title_name;
    document.basicDescription__title_name.classList.add('hide');
  }, 1000);
  setTimeout(() => {
    document.basicDescription__title_name.classList.remove('active');
    document.basicDescription__title_name.classList.remove('hide');
  }, 2000);
}
function changeTitleDescription( document,data ) {
  setTimeout(() => {
    document.basicDescription__title_description.classList.add('active');
  }, 300);
  setTimeout(() => {
    document.basicDescription__title_description.innerHTML = data[counter].basicDescription__title_description;
    document.basicDescription__title_description.classList.add('hide');
  }, 1300);
  setTimeout(() => {
    document.basicDescription__title_description.classList.remove('active');
    document.basicDescription__title_description.classList.remove('hide');
  }, 2300);
}
function changeRemaining( document, data ) {
  setTimeout(() => {
    document.basicDescription__aboutIt.classList.add('hide');
    document.additionalDescription__itemCategory.classList.add('hide');
    document.additionalDescription__itemPhotographyBy.classList.add('hide');
    document.additionalDescription__itemWrittenBy.classList.add('hide');
    document.additionalDescription__itemPublishedOn.classList.add('hide');
  }, 1000);
  setTimeout(() => {
    document.basicDescription__aboutIt.innerHTML = data[counter].basicDescription__aboutIt;
    document.additionalDescription__itemCategory.innerHTML = data[counter].additionalDescription__itemCategory;
    document.additionalDescription__itemPhotographyBy.innerHTML = data[counter].additionalDescription__itemPhotographyBy;
    document.additionalDescription__itemWrittenBy.innerHTML = data[counter].additionalDescription__itemWrittenBy;
    document.additionalDescription__itemPublishedOn.innerHTML = data[counter].additionalDescription__itemPublishedOn;

    document.basicDescription__aboutIt.classList.remove('hide');
    document.additionalDescription__itemCategory.classList.remove('hide');
    document.additionalDescription__itemPhotographyBy.classList.remove('hide');
    document.additionalDescription__itemWrittenBy.classList.remove('hide');
    document.additionalDescription__itemPublishedOn.classList.remove('hide');
  }, 1500);
}


function changeHtml(document, data) {
  changeTitleName(document, data);
  changeTitleDescription(document, data);
  changeRemaining( document, data )
}


export {changeHtml}
