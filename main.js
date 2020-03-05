const messWithMe = document.querySelector('.mess-with-me');
messWithMe.style.fontSize = '3em';
messWithMe.style.backgroundColor = 'green';

const hide2Image = document.querySelector('#hide-me');
hide2Image.style.display = 'none';

const firstImage = document.querySelector("#triceratops");
firstImage.style.width = '324px';

const makeOrange = function(){
messWithMe.style.color = 'orange';
};
messWithMe.addEventListener('click',makeOrange);

const redBorder = function(){
  firstImage.style.border = 'thin dotted red';
};
firstImage.addEventListener('click', redBorder);

const featherDino = document.querySelector('#feathers')
const halfTranny = function(){
  featherDino.style.opacity = '0.5';
};
featherDino.addEventListener('click',halfTranny);

const button = document.querySelector('#toggle');
const picRow= document.querySelector('#row');
const changeBackgroundColor = function(){
  picRow.style.backgroundColor = 'blue';
};

button.addEventListener('click', changeBackgroundColor);






