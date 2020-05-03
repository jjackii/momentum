const body = document.querySelector("body");

const IMG_NUMBER = 5; //constant(상수)

function paintImage(imgNumber) {
  //imgNumber:number가져올것
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`; //src:sorce
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER); //:소수점내림, Math.ceil():올림, 3:0~2 총 3가지 number
  return number;
}

function init() {
  const randomNumber = genRandom(); //random숫자 가져옴
  paintImage(randomNumber); //숫자에 맞는 이미지 paint
}
init();
