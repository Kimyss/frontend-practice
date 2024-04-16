const boxEls = document.querySelectorAll('.box')
console.log(boxEls);


// forEach()
boxEls.forEach(function(boxEls,index) {
  console.log(index,boxEls);
  
  boxEls.classList.add(`order-${index+1}`);
})