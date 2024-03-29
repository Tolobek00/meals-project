let urlParams = new URLSearchParams(window.location.search);

let categorySearch = urlParams.get("id");

const API_BYID = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${categorySearch}`;
const INGREDIENTS = "https://www.themealdb.com/images/ingredients/";
const FLAGS = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${categorySearch}`;

let info = document.querySelector(".info");

async function getInfo() {
  try {
    const res = await fetch(API_BYID);
    const data = await res.json();

    console.log(data);
    showInfo(data.meals[0]);
  } catch (error) {
    console.log(error);
  }
}
getInfo();

function showInfo(data) {
  let showUrl = "";
  for (let i = 1; i <= 20; i++) {
    const findName = data["strIngredient" + i];
    const measure = data["strMeasure" + i];
    if (findName) {
      showUrl += `
      <div calss="ingredients">
        <img src="${INGREDIENTS + findName}-Small.png"/> 
        <h1 onclick="goToCategory('${
          data.strCategory
        }')" >${findName}-${measure}</h1>
      </div>
      `;
    }
  }
  info.innerHTML = `
  <div class="meals-container">
    <div class="product">
      <h1>${data.strArea}/${data.strMeal}</h1>
      <img src="${data.strMealThumb}" alt="${data.strMeal}" />
      <h1 onclick="goToCategory('${data.strCategory}')" class="tags">${data.strTags}</h1>
      <div class="images">
        <img onclick="setId('prev')"  src="https://www.themealdb.com/images/icons/Arrow-Left.png" />
        <img id="next" onclick="setId('next')" src="https://www.themealdb.com/images/icons/Arrow-Right.png" />
      </div>
    </div>
    <section class="meals-title"><h1 class="title">Ingredient</h1>
    <div class="meals-images ingredients">
    ${showUrl}</div>
    </section>
  </div>
  `;
}
function setId(str) {
  const newMealId =
    str == "prev" ? parseInt(categorySearch) - 1 : parseInt(categorySearch) + 1;
  window.location.href = `info.html?id=${newMealId}`;
}
function goToCategory(data) {
  window.location.href = `meal.html?category=${data}`;
}

// ................................////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let urlParams = new URLSearchParams(window.location.search);
// let categorySearch = urlParams.get("id");
// const API_BYID = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${categorySearch}`;
// const INGREDIENTS = "https://www.themealdb.com/images/ingredients/";
// let info = document.querySelector(".info");

// async function getInfo() {
//   try {
//     const res = await fetch(API_BYID);
//     const data = await res.json();
//     console.log(data);
//     showInfo(data.meals[0]);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getInfo();

// function getFlagURL(countryCode) {
//   // Используем расширение .png для изображений флагов
//   return `flags/${countryCode}.png`;
// }

// function showInfo(data) {
//   let showUrl = "";
//   const flagURL = getFlagURL(data.strArea.toLowerCase()); // Предполагаем, что код страны хранится в нижнем регистре

//   for (let i = 1; i <= 20; i++) { // Используем i = 1, так как индексация начинается с 1, а не с 0
//     const findName = data["strIngredient" + i];
//     const measure = data["strMeasure" + i];
//     if (findName) {
//       showUrl += `
//       <div class="ingredients">
//         <img src="${INGREDIENTS + findName}-Small.png"/>
//         <h1>${findName}-${measure}</h1>
//       </div>
//       `;
//     }
//   }

//   // Добавляем элемент .flags для вставки изображения флага
//   info.innerHTML = `
//   <div class="meals-container">
//     <div class="product">
//       <img class="flag" src="${flagURL}" alt="${data.strArea} Flag" /> <!-- Добавляем изображение флага страны -->
//       <h1>${data.strArea}/${data.strMeal}</h1>
//       <img src="${data.strMealThumb}" alt="${data.strMeal}" />
//       <h1 class="tags">${data.strTags}</h1>
//       <div class="images">
//         <img onclick="setId('prev')"  src="https://www.themealdb.com/images/icons/Arrow-Left.png" />
//         <img onclick="setId('next')" src="https://www.themealdb.com/images/icons/Arrow-Right.png" />
//       </div>
//     </div>
//     <div class="meals-images ingredients">${showUrl}</div>
//   </div>
//   `;
// }

// function setId(str) {
//   const newMealId = str == "prev" ? parseInt(categorySearch) - 1 : parseInt(categorySearch) + 1;
//   window.location.href = `info.html?id=${newMealId}`;
// }

//  data.map((x) => {
//     return `
//         <div class="product">
//         <h1>${x.strMeal}</h1>
//           <img src="${x.strMealThumb}" alt="" />
//           <h1 class="tags">${x.strTags}</h1>
//           <div class="images">
//            <img onclick="setId('prev')" src ="https://www.themealdb.com/images/icons/Arrow-Left.png"
//            <img onclick="setId('next')" src ="https://www.themealdb.com/images/icons/Arrow-Right.png"
//           </div>
//         </div>
//         <div class="ingredients">
//           ${generateIngredientsHTML(x)}
//           <a href="${x.strYoutube}"></a>
//           <img src="${x.INGREDIENT}" alt="${x.INGREDIENT}"/>

//         </div>
//         `;
//   }).join("");

// function generateIngredientsHTML(meal) {
//   let ingredientsHTML = "";
//   for (let i = 1; i <= 20; i++) {
//     const ingredient = meal[`strIngredient${i}`];
//     const measure = meal[`strMeasure${i}`];
//     if (ingredient && ingredient.trim() !== "") {
//       ingredientsHTML += `
//           <section class="ingrediens">
//             <img src="" alt="${ingredient}" />
//             <h1>${ingredient} - ${measure}</h1>
//           </section>
//         `;
//     }
//   }
//   return ingredientsHTML;
// }

//   function goToInfo (id) {
//     window.location.href = `info.html?id=${id}`
//   }
