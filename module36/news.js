

// function newsCards(){
//     window.location.href = "index.html?category=08";
// }

// onload = newsCards();

// secondary navigation unit with api call

function news() {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayNav(data.data.news_category))
        .catch(error => console.log(error))
}

const loadUserAsync = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    displayNav(data.data.news_category);
}

function displayNav(data){
    console.log(data);
    const div = document.getElementById('secondaryNav');
    
    for(const category of data){
        // console.log(category);
        const a = document.createElement('a');
        a.innerText = category.category_name;
    console.log(category.category_id);
        a.setAttribute('href', `index.html?category=${category.category_id}`);
        a.classList.add('btn', 'btn-secondary', 'btn-sm', 'm-2');
        div.appendChild(a);
        
        
    }
    
    
}



function modal(){
    var e = window.event;
     btn = e.target || e.srcElement;
    const modalId = btn.id;
    console.log(modalId);
    
    fetch(`https://openapi.programming-hero.com/api/news/${modalId}`)
    .then(res => res.json())
    .then(data => displayModalDetail(data.data[0]))
    .catch(error => console.log(error))


}

function displayModalDetail(data){
    console.log(data);
    alert(data.details);
    const modal = document.getElementById('modalElement');
    const div = document.createElement('div');
    div.classList.add('modal-dialog');
    div.innerHTML = `

    <div class="modal-body" id="modal-body">

    <img src="${data.image_url}" class="w-100 md:w-50 card-img-top" alt="...">
      <br>
      <span class = "text-gray-500"><span class="fa fa-eye"></span> View Count: ${data.total_view}   ||   
              Ratings: ${data.rating.number}     ||
              Author Review: ${data.rating.badge}     </span>
              
          <h1 class="text-2xl text-gray-200 font-bold">${data.title}</h1>
          <span class="ms-2 text-gray-500">Published: ${data.author.published_date}</span>
              <p class="text-gray-400">${data.details}</p>
              <br><br><br>
      <a class="card-footer text-gray-500" href="https://t.me/mrxx32">
                  <img src="${data.author.img}" class="w-10 rounded" alt="">
                  <span class="fa fa-thumbs-up"> </span>
                  <span class="ms-2">${data.author.name}</span>
                  
      </a><br>
    
    
    </div> 
    
    `
    modal.appendChild(div);

}




// main unit of news card with api call

function newsCard() { 

    

    const clearSeection = document.getElementById('faq');
    clearSeection.innerHTML = '';
    const clearSeection1 = document.getElementById('secondaryNav');
    clearSeection1.innerHTML = '';
    
    news();
    
    // console.log(category.category_id);



    
    const url = new URL(window.location.href);
    const category = url.searchParams.get('category');
    console.log(category);
    // onload = fetch(`https://openapi.programming-hero.com/api/news/category/08`)
    // fetch(`https://openapi.programming-hero.com/api/news/category/08`)
        
    fetch(`https://openapi.programming-hero.com/api/news/category/${category}`)
    
    .then(res => res.json())
    .then(data => displayNews(data.data))
    .catch(error => console.log(error))
    //start spinner

}

const loadUserAsync1 = async () => {
    const url = new URL(window.location.href);
    const category = url.searchParams.get('category');
    console.log(category);
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${category}`);
    const data = await response.json();
    displayNews(data.data);
    //start spinner
toggleSpinner(true);
}

function displayNews(data){
    console.log(data);
    const div = document.getElementById('newsCard');
    const header = document.createElement('div');
    header.innerHTML = `<h1 class="mt-10 mb-5 text-white text-4xl text-center">Be updated with PARADOX NEWS PORTAL!</h1>`;
    div.appendChild(header);
    const count = document.createElement('div');
    count.innerHTML = `<h4 class=" mb-2 text-white text-xl text-center">Total News: ${data.length}</h4>`;
    div.appendChild(count);
    for(const news of data){
        const div1 = document.createElement('div');
        div1.classList.add('card');
        div1.innerHTML = `
        <div class="bg-secondary mx-3 mt-3 m-secondary card-body  card lg:card-side glass shadow-xl">
        <figure><img src="${news.image_url}" class=" card-img-top" alt="..."></figure>
            <div class="card-body">
                <h3 class="card-title">${news.title}</h3>
                <br>
                <p class=" overflow-clip">${news.details}</p>
                <br>
                <div class=" justify-end">
                    <div class="card-footer ">
                    <img src="${news.author.img}" class="w-10 rounded" alt="">
                    <a href="https://www.facebook.com" target="_blank" class="fa fa-thumbs-up"> </a>
                    <span class="ms-2">${news.author.name}</span>
                    </div>
                    <span class = "flex flex-between "> 
                    <br>        
                    <p><span class="fa fa-eye"></span> View Count: ${news.total_view}</p>
                    
                 
                    
                <label for="my-modal-3" onclick="modal()" id="${news._id}" class="btn modal-button">Read More</label>
                

            </div>
        </div>
        </br>
        `
        div.appendChild(div1);
    }   
    //stop spinner
    toggleSpinner(false);
    //modal function
    mod();

}


newsCard();





function settings(){
    alert('We are working on it! Stay tuned!');
}





// //modal load
function mod(){
    console.log('nodal');
    const modal = document.getElementById('modal');
    modal.classList.toggle('d-none');
    modal.innerHTML = `
    
     `

}


const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('hidden');
    }
}