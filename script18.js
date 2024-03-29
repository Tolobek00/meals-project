let urlParams = new URLSearchParams(window.location.search);

let searchValue = urlParams.get("s");
let filterByLetter = urlParams.get("f");
let filterByCategory = urlParams.get("c");

let searchBy = "f";
let filterName = "a";
let categoryName = "c";


console.log(filterByLetter);
console.log(filterByCategory);
if (searchValue) {
  searchBy = "s";
  filterName = searchValue;
}

if (filterByLetter) {
  searchBy = "f";
  filterName = filterByLetter;
}

if(searchValue) {
  searchBy = "s";
  categoryName = searchValue;
}
if (filterByCategory) {
  searchBy = "c"
  categoryName = filterByCategory
}


let input = document.querySelector(".search");

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    let letter = input.value;
    window.location.href = `index18.html?s=${letter}`;
  }
});

const API = `https://www.themealdb.com/api/json/v1/1/search.php?${searchBy}=${filterName}`;

let meals = document.querySelector(".meals");

async function getMeal() {
  try {
    const res = await fetch(API);
    const data = await res.json();

    console.log(data);
    showMeal(data.meals);
  } catch (error) {
    console.log(error);
  }
}
getMeal();

function showMeal(data) {
  meals.innerHTML = data.map((x) => { 
      return `
        <div onclick="goToInfo('${x.idMeal}')" class="product">
          <img src="${x.strMealThumb}" alt="" />
          <h1>${x.strMeal}</h1>
        </div>
        `;
    }).join("");
}
function goToInfo (id) {
  window.location.href = `info.html?id=${id}`
}
const APID = `https://www.themealdb.com/api/json/v1/1/categories.php?category=${categoryName}`;

async function filtMeal() {
  try {

  }catch(error) {
    
  }
}

let mealsSecond = document.querySelector(".meals-second");

getMealSecond();

async function getMealSecond() {
  try {
    const res = await fetch(APID);
    const data = await res.json();

    console.log(data);
    showMealSecond(data.categories);
  } catch (error) {
    console.log(error);
  }
}
function showMealSecond(data) {
  mealsSecond.innerHTML = data.map((item) => {
      return `
        <div  onclick="setCategory('${item.strCategory}')" class="products">
          <img src="${item.strCategoryThumb}" alt="" />
          <h1>${item.strCategory}</h1>
        </div>
      `;
    }).join("");
}

function setCategory(category) {
  window.location.href = `meal.html?category=${category}`;
}

let letter = document.querySelector(".letter");

let arrayLetter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

letter.innerHTML = arrayLetter.map((item) => {
    return `
  <a onclick="setLetter('${item}')" class="ahref">${item} <span class="slesh">/</span></a>
  `;
  })
  .join("");

function setLetter(item) {
  window.location.href = `index18.html?f=${item}`;
}


