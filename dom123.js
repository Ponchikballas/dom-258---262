// // 258 задание 1
// let divs = document.querySelectorAll("div");
// for (let div of divs) {
//   div.addEventListener("click", function () {
//     this.textContent++;
//   });
// }

// 259 задание 1
// let button = document.querySelector('#button')
//  let a =document.querySelector('#a')
//  button.addEventListener('click', func)

//  function func(){
//      a.textContent = a.textContent + '(' + a.href + ")"
//      this.removeEventListener('click', func )
//  }

// // 259 задание 2
// let button = document.querySelector("#button");
// button.addEventListener("click", func);
// function func() {
//   if (Number(button.value < 10)) {
//     this.value = Number(this.value) + 1;
//   } else {
//     this.removeEventListener("click", func);
//   }
// }

// // 260 задание 1
// let elems = document.querySelectorAll('p')
//  for(let elem of elems){
//      elem.addEventListener('click', func)
//  }
//  function func (){
//      this.textContent += '!';
//      this.removeEventListener('click', func )
//  }

// // 261 задание 1
// let elems = document.querySelectorAll('li');
//  for(let elem of elems){
//      elem.addEventListener('click', function(){
//                  this.textContent = +this.textContent + 1;
//   })
//  }

// // 261 задание 2
// let elems = document.querySelectorAll('li');
// for(let elem of elems){
//     elem.addEventListener('click', func);
//     function func(){
//         this.textContent = +this.textContent + 1;
//         this.removeEventListener('click', func)
//     }
//     }

// // 261 задание 3
// let elems = document.querySelectorAll("li");
// for (let elem of elems) {
//   elem.addEventListener("click", function func() {
//     if (+this.textContent < 10) {
//       this.textContent = +this.textContent + 1;
//     } else {
//       this.removeEventListener("click", func);
//     }
//   });
// }


// // 262 задание 1
// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');
// console.log(value);



// // 262 задание 2
// let elem = document.querySelector('#elem');
// let classs = elem.getAttribute('class');
// console.log(classs);

// // 262 задание 3
// let elem = document.querySelector('#elem');
// elem.setAttribute('value' , 'asdfasdfasdfasdf');
// console.log(elem);


// // 262 задание 4
// let elem = document.querySelector('#elem');
// elem.setAttribute('value' , 'valid');
// console.log(elem);


// // 262 задание 5
// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');
// console.log(elem)


// // 262 задание 6
// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));