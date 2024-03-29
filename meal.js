let urlParams = new URLSearchParams(window.location.search);

let categorySearch = urlParams.get("category")

const API = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorySearch}`

let meals = document.querySelector(".meals")


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