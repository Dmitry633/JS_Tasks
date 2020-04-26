
'use strict';
let
// menuElements = document.querySelectorAll('.menu-item');
// menuElements = document.getElementsByTagName('li');
 menuElements = document.getElementsByClassName('menu-item'),
  FifthElement = document.createElement('fElement'),
  menuOfElements = document.querySelector('.menu'),
  screen = document.getElementsByTagName('body'),
  theTitle = document.getElementById('title'),
//  advetisement = document.querySelector('.adv'),
  theColumn = document.getElementsByClassName('column'),
  usersAnswer = document.getElementById('prompt'),
  question = prompt('Каково Ваше отношение к технике Apple?');
 console.log (menuElements);
 console.log (FifthElement);
 console.log (menuOfElements);
 console.log (screen);
 console.log (theTitle);
 //console.log (advetisement);
 console.log (theColumn[1]);
 console.log (usersAnswer);

 menuOfElements.appendChild(FifthElement);
 FifthElement.classList.add('menu-item');
 FifthElement.innerHTML = 'Пятый пункт';
 menuOfElements.insertBefore(menuElements[2], menuElements[1]);
 screen[0].style.backgroundImage = "url(img/apple_true.jpg)";
//  document.body.style.backgroundImage = "url(img/apple_true.jpg)";
 //'./img/apple_true.jpg';
 theTitle.innerHTML = 'Мы продаём только подлинную технику Apple';
//  theColumn[1].removeChild(advetisement);
 usersAnswer.textContent = question; 


 
 document.querySelector('.adv').remove();
