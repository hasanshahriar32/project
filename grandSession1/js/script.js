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


for(let i = 0; i<5 ; i++){
    const div = document.createElement('div')
    div.classList.add('card', 'bg-base-100', 'shadow-2xl', 'p-4');
    div.innerHTML = `

              <figure>
                <img
                  src="https://placeimg.com/400/225/arch"
                  alt="Shoes"
                  class="rounded-lg w-full"
                />
              </figure>
              <div class="mt-[20px]">
                <div class="flex justify-between">
                  <h2 class="card-title">Shoes!</h2>
                  <div class="flex text-lg">
                    <span class="mr-4"
                      ><i class="fa-solid fa-heart text-slate-500"></i
                    ></span>
                    <span
                      ><i class="fa-solid fa-square-minus text-red-700"></i
                    ></span>
                  </div>
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="mt-2 flex justify-between">
                  <!-- modal open button -->
                  <label
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
    homePageContent.appendChild(div)
}

