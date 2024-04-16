console.log(document.querySelector('h1'));
console.log(document.querySelector('p'));
console.log(document.querySelector('#text'));
console.log(document.querySelector('.paragraph'));
console.log(document.querySelector('.parafffffff'));

console.log(document.getElementById('text'));
console.log(document.getElementById('paragraph'));

const h1 =  document.querySelector('h1')
const p = document.getElementById('text')

console.log(h1.textContent);
h1.textContent="h1 태그내용바꾸기"

p.textContent="겟엘리먼트바이아이디"
console.log(p.textContent);



const inputType =  document.querySelector('#typying')
const inputClick = document.querySelector('#push')

// const handleTyping = function () {
//   console.log("타이핑 되고 있어요");
// }

const handleClick = function () {
  console.log("클릭되고 있어요");
}

// inputType.onkeydown = handleTyping;
inputClick.onclick = handleClick;

inputType.onkeydown = function () {
  console.log("타이핑 되고 있어요");
}

const btn1 = document.getElementById('one')
const btn2 = document.getElementById('two')
const btn3 = document.getElementById('three')

const handleClick1 = function () {
  console.log("클릭클릭클릭");
}

console.log();

// btn2.addEventListener('click',handleClick1);
// btn3.addEventListener('click', function () {
//   console.log("다른 핸들러등록");
// 