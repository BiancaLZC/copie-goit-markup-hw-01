// task 1
"use strict";
const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul li");
  console.log(`Caterogy: ${categoryTitle}`);
  console.log(`Category: ${categoryElements.length}`);
});


//task 2
"use strict"
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientList = document.getElementById('ingredients');

ingredients.forEach( e =>{
 let li = document.createElement('li');
 li.innerText = e;
 ingridientList.append(li);
});

//task 3
"use strict"
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector(".gallery");

images.forEach((e) => {
  let li = document.createElement("li");
  let img = `<img src = "${e.url}" alt = "${e.alt}">`;
   li.insertAdjacentHTML('afterbegin',img);
  gallery.append(li);
});
//task 4
"use strict"
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const displayValue = document.querySelector('#value');
let counterValue = [0];
incrementBtn.addEventListener('click', (e) => {
    counterValue += 1;
    displayValue.innerText = counterValue;
});
decrementBtn.addEventListener('click', (e) => {
    counterValue -= 1;
    displayValue.innerText = counterValue;
});

//task 5
"use strict"
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
input.addEventListener("input", (event) => {
    if (event.currentTarget.value && event.currentTarget.value != " ") {
        output.innerText = capitalizeFirstLetter(event.currentTarget.value);
    } else {
        output.innerText = 'Anonymous';
    };
});
//task 6
"use strict"
const input = document.querySelector("#validation-input");
const charSet = document.querySelector('input[data-length="6"]');
const charNumb = Number(charSet.dataset.length);

const validateInput = (e)=>{
    let value = e.currentTarget.value.length
    if (e.currentTarget.value != ''){
        if (value === charNumb){
            input.classList.remove('invalid');
            input.classList.add('valid');
            return;
        }
        input.classList.add('invalid');
        return;
    }
    input.removeAttribute('class');
}

input.addEventListener('blur', validateInput);
//task 7
"use strict"
const text = document.getElementById("text");
const sizeControl = document.getElementById("font-size-control");

sizeControl.addEventListener('input', (e) => {
    text.style.fontSize = `${e.currentTarget.value}px`
});
//task 8
"use strict"
const loginForm = document.querySelector('.login-form');
const user = {
    user: "",
    password: "" 
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const {elements} = e.target;
    const userEmail = elements['email'].value;
    const userPassword = elements['password'].value;

    if (userEmail === ''||userPassword === '') {
        alert('You must complete all fields !');
        return;
    }
    user.email = userEmail;
    user.password = userPassword;
    console.log(user);
    loginForm.reset();
});
//task 9
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeColorButton.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}); 