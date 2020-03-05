const spanMessWithMe = document.querySelector('.mess-with-me');
spanMessWithMe.style.fontSize = '3em';

const pMessWithMe = document.querySelector('p.mess-with-me');
pMessWithMe.style.backgroundColor = 'green';

const hide2Image = document.querySelector('#hide-me');
hide2Image.style.display = 'none';

const firstImage = document.querySelector("#triceratops");
firstImage.style.width = '324px';

const makeOrange = function(){
spanMessWithMe.style.color = 'orange';
};
spanMessWithMe.addEventListener('click',makeOrange);

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
  if(picRow.style.backgroundColor === ''){
  picRow.style.backgroundColor = 'blue';
  } else if (picRow.style.backgroundColor === 'blue'){
    picRow.style.backgroundColor = '';
  }
};

button.addEventListener('click', changeBackgroundColor);

biggy = document.querySelector('#biggify');
const hoverGrow = function(){
  biggy.style.width = '200px';
};

biggy.addEventListener('mouseover',hoverGrow);








