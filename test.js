'use strict';
// --------------------------------------------------------------------------------------
// let z = isNaN(5) === false;
// console.log(z);

// let a = 'Widget is here';
// console.log(a.endsWith('here'));
// console.log(a.slice(0,6));
// console.log(a.substring(15,7));
// console.log(a.substr(0,6));

// console.log('z'.codePointAt());
// console.log(String.fromCodePoint(90));

// // СРАВНЕНИЕ СТРОК
// console.log('Adssfsfsf'.localeCompare('Bqfefeffee'));
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// function one() {
//     let a = 1;
//     return function() {
//         a += 1
//         console.log(a);
//     }
// }

// let x = one();
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
//     makeTest: function () {

//     }
// };
// const{border, bg} =  options.colors;
// console.log(border);
// console.log(bg);
// console.log(Object.keys(options));
// console.log(options.colors.border);

// delete(options.name);

// console.log(options);

// for(let key in options){
//     if(typeof (options[key]) === 'object'){
//         for(let i in options[key]){
//             console.log(i + `:${options[key][i]}`);
//         }
//     }else{
//         console.log(key + `:${options[key]}`);
//     }
// }
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
//                                                  ОБХОД ПО ЭЛЕМЕНТАМ МАССИВА И ЕГО СОРТИРОВКА
// const arr = [8,2,3,12,5,34];
// console.log(arr.forEach((item, index, arr) => {
//     console.log(`${index}: ${item}`);
// }));

// console.log(arr.sort((a,b) => {
//     return a - b;
// }));
// --------------------------------------------------------------------------------------

// // --------------------------------------------------------------------------------------
// //                                                  КЛОНИРОВАНИЕ ОБЬЕКТА(НЕГЛУБОКАЯ КОПИЯ)
// const obj = {
//     name: 'Ivan',
//     age: 12,
// };
// function copy(mainObj) {
//     let objCopy = {};
//     for(let key in mainObj){
//         if(typeof (mainObj[key]) === 'object'){
//             for(let i in mainObj[key]){
//             objCopy[key][i] = mainObj[key][i];
//         }
//     }else{
//         objCopy[key] = mainObj[key];
//     }
// }
//     return objCopy;
// }
// const numb = {
//     a:4,
//     b:3,
//     c:{
//         g:2
//     }
// };
// // const newNumber = copy(numb);
// // newNumber.a = 10;
// // console.log(newNumber);
// // console.log(numb);

// // КЛОНИРОВАНИЕ ОБЬЕКТА
// console.log(Object.assign({b:13,},{d:17,}));
// const a = Object.assign({},numb);
// a.b = 15;
// console.log(a);
// console.log(numb);

//                                                  КЛОНИРОВАНИЕ МАССИВА
// const oldArray = [1,2,3]
// const newArray = oldArray.slice();

//                                                  ПОВЕРХОСТНАЯ КОПИЯ МАССИВА(СПРЕД ОПЕРАТОР)
// const video = [1,2,3,4,5],
// blogs = [6,7,8,9],
// internet = [...video,...blogs];

// function log(a,b,c){
//     console.log(a,b,c); 
// }
// const num = [2,5,6];
// log(...num);

// const array = ['a','b','c'];
// const newA = [...array];

// const obj = {
//     a:1,
//     b:2,
// }
// const newObj = {...obj};
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
//                                                  ООП

const soldier = {
    health: 400,
    sayHello: () => {
        console.log('Hello');
    },
};
const john = Object.create(soldier);

john.sayHello();
// john.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier);
// --------------------------------------------------------------------------------------
//                                                  DOM(Document Object Module)