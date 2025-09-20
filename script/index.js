const loadCategory = () => {
    const url ="https://taxi-kitchen-api.vercel.app/api/v1/categories"
    fetch(url)
    .then(res=>res.json())
    .then((data)=> displayCategory(data.categories))
}

const loadRandomFoods = () => {
    const url="https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
    fetch(url)
    .then(res=>res.json())
    .then((data)=> displayFoods(data.foods))
}

const loadFoods =(id)=>{
    const url = `https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then((data)=> displayFoods(data.foods))
}

const loadFoodDetails = (id) => {
   const url = `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
   fetch(url)
    .then(res=>res.json())
    .then((data)=>  displayFoodDetails(data.details))
}

const displayCategory = (categories) => {
    const catContainer = document.getElementById("category-container")
    catContainer.innerHTML= ""
    for(let cat of categories){
        const categoryCard = document.createElement("div")
        categoryCard.innerHTML = `
        <button onclick = "loadFoods(${cat.id})" class="btn btn-block justify-start shadow btn-category">
            <img
              src="${cat.categoryImg}"
              alt=""
              class="w-10"
            />${cat.categoryName}
          </button>

        `
        catContainer.append(categoryCard);
    }
}

const displayFoods = (foods) =>{
    const containerFood = document.getElementById("food-container")
    containerFood.innerHTML =""
    for(let food of foods){
        const foodCard = document.createElement("div")
        foodCard.innerHTML = `
        <div onclick = "loadFoodDetails(${food.id})" class="" id="food-container">
          <!-- sample card  -->
          <div class="p-5 bg-white flex gap-3 shadow rounded-xl">
            <div class="img flex-1">
              <img
                src="${food.foodImg}"
                alt=""
                class="w-[160px] rounded-xl h-[160px] object-cover"
              />
            </div>
            <div class="flex-2">
              <h1 class="text-xl font-bold">
                ${food.title}
              </h1>

              <div class="badge badge-warning">${food.category}</div>

              <div class="divider divider-end">
                <h2 class="text-yellow-600 font-semibold">
                  $ <span class="price">${food.price}</span> BDT
                </h2>
              </div>

              <button class="btn btn-warning">
                <i class="fa-solid fa-square-plus"></i>
                Add This Item
              </button>
            </div>
          </div>
        </div>
        `
        containerFood.append(foodCard)
    }

}


const displayFoodDetails = (food) =>{
    const detailsContainer = document.getElementById("details-container")
    detailsContainer.innerHTML =`
        <h2 class="text-3xl font-bold">${food.title}
        <div id="details-container">
           <img src="${food.foodImg}" alt="">
        </div>

        <div class=" badge badge-primary">
           ${food.area}
        </div>
        <a href="${food.video}" target="_blank" class="btn btn-warning mt-2"> Watch Video </a>
    `;
    document.getElementById("my_modal_3").showModal();
}



loadRandomFoods()
loadCategory()