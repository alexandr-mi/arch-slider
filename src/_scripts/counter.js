import {data} from "./data";

let counter = 0;


function counterNext() {
  if ( counter === data.length - 1) {
    counter = 0;
    return
  }
  counter++;
}

function counterPrev() {
  if ( counter === 0 ) {
    counter = data.length - 1;
    return
  }
  counter--;
}

export {counterNext, counterPrev, counter}
