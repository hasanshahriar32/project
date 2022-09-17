const wishlistPage = document.getElementById('wishlist-page')
const homePage = document.getElementById('home-page')
const homePageContent = document.getElementById('homepage-content');

const navigateToHomePage = () =>{
    homePage.style.display = "block";
    wishlistPage.style.display = "none"
}

const navigateToWishListPage = () =>{
    wishlistPage.style.display = "block";
    homePage.style.display = "none"
}

let dataSet;
//fetch data from the api
fetch("js/data.json")
//convert the data to json
.then((res) => res.json())
.then((data) => {
  dataSet = data;
  displayData(data);
});





function displayData(data){
   data.forEach (item => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
         <figure>
                <img
                  src="${item.img}"
                  alt="${item.name}"
                  class="rounded-lg w-full h-[300px]"
                />
              </figure>
              <div class="mt-[20px]">
                <div class="flex justify-between">
                  <h2 class="card-title">${item.name}</h2>
                  <div class="flex text-lg">
                    <span class="mr-4"
                      ><i class="fa-solid fa-heart text-slate-500"></i
                    ></span>
                    <span
                      ><i class="fa-solid fa-square-minus text-red-700"></i
                    ></span>
                  </div>
                </div>
                <p>If a dog chews ${item.name} whose ${item.name} does he choose?</p>
                <br>
                    <h2 class = "text-xl"> Price: ${item.price}<h2>
                    <br>
                <div class="mt-2 flex justify-between">
                  <!-- modal open button -->
                  <label
                  onclick="openModal('${item.id}')"
                    for="my-modal-3"
                    class="btn btn-outline btn-primary w-[45%] mx-auto flex justify-center items-center"
                  >
                    <i class="fa-solid fa-circle-info mr-2"></i> See Details
                    
                  </label>

                  <button
                    class="btn btn-outline btn-secondary w-[45%] mx-auto block"
                  >
                    <i class="fa-solid fa-bag-shopping mr-2"></i>Buy Now
                  </button>
                </div>
              </div>

        `
        homePageContent.appendChild(div);
    })
   } 
   ;



// //editing modal body
function openModal(id) {
console.log(id);
const item = dataSet.find((item) => item.id === id);
// const { name, price, img } = item;
console.log(item);
const modalBody = document.getElementById("modal-body");
modalBody.innerHTML = `
<div>
<img src="${item.img}" alt="${item.name}" class="rounded-lg  h-[300px]"/>
          <h1 class="font-semibold text-xl my-2">
            <span class="text-primary">PRODUCT : </span> ${item.name}
          </h1>
          
          <p class="font-semibold text-xl">
            <span class="text-primary">PRICE : </span> $<span>${item.price}</span>
          </p>
        </div>`;

}