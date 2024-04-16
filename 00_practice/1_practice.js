
// 함수선언식
function sayHello() {
  console.log("hello");
  console.log("Hi");
  console.log("안농");
}

sayHello();
sayHello();


// 재사용할수있다 !!! 



// 함수표현식
const sayBye = function () {
  console.log("goooooodbye!");
}

sayBye();

function hello() {
  let helloText = "문자열hello"
  console.log(helloText);
}

hello();
// console.log(hello);  지역변수




// r그냥 3 출력
console.log(3);

// 3을 반환하는 함수호출문을 출력
console.log(getThree());

// getThree호출하면 3 반환
function getThree() {
  return 3;
}

function noReturn() {
  console.log("노반환");
}

const result = noReturn()
console.log(result);


function therIsReturn() {
  console.log("반환");
  return 5,4,3,2,1;
}

const result2 = therIsReturn()
console.log(result2);

function therIsReturn2() {
  console.log("함수내 변수선언");
  let num = 77;
  return num;
}

const result3 = therIsReturn2();
console.log(result3);

// console.log(num);



// function 함수명(함수가 실행될때 사용할 재료를 전달받음. 데이터) {
  
// }

// 매개변수와 인자(값)
function sayFood(food1, food2) {
  console.log("오늘의 저녁은?");
  console.log(food1);
  console.log(food2);
}

sayFood("된장찌개", "계란후라이");
sayFood("초밥", "아사히생맥주");

function bigNum(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  } 
}

console.log("더 큰숫자는?");
console.log(bigNum(20, 30));
console.log(bigNum(77, 1));
console.log(bigNum("문자","또문자"));


function sayAnithing(ant, num) {
  console.log("어떤말이든");
  for(let i = 0; i < num; i++)
  console.log(ant);
}

sayAnithing("이해 잘 되게 해주세요", 2);
sayAnithing("취업 잘 되게 해주세요", 3);