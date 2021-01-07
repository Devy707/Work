'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';
// box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});
const div = document.createElement('div');
// // const text = document.createTextNode('I');

div.classList.add('black');

div.innerHTML = '<h1>Hello!</h1>';
// div.textContent = 'Hello!';

// document.body.append(div);

// box.after(div);

// box.before(div);

div.insertAdjacentHTML('beforeend', "<h2>Hello!</h2>");