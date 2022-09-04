
// secondary navigation unit with api call

function news() {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayNav(data.data.news_category))
}



function displayNav(data){
    console.log(data);
    const div = document.getElementById('secondaryNav');
    for(const category of data){
        // console.log(category);
        const a = document.createElement('a');
        a.innerText = category.category_name;
    console.log(category.category_id);
        a.setAttribute('href', `news.html?category=${category.category_id}`);
        // a.href = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
        div.appendChild(a);
        
    }
}





// main unit of news card with api call

function newsCard() { 

    const clearSeection = document.getElementById('faq');
    clearSeection.innerHTML = '';
    const clearSeection1 = document.getElementById('secondaryNav');
    clearSeection1.innerHTML = '';
    
    news();



    const url = new URL(window.location.href);
    const category = url.searchParams.get('category');
    console.log(category);
    fetch(`https://openapi.programming-hero.com/api/news/category/01`)
    .then(res => res.json())
    .then(data => displayNews(data.data))
}

function displayNews(data){
    console.log(data);
    const div = document.getElementById('newsCard');
    const header = document.createElement('div');
    header.innerHTML = `<h1 class="mt-10 mb-5 text-white text-4xl text-center">Be updated with PARADOX NEWS PORTAL!</h1>`;
    div.appendChild(header);
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
                    <span class="fa fa-thumbs-up"> </span>
                    <span class="ms-2">${news.author.name}</span>
                    </div>
                    <span class = "flex flex-between "> 
                    <br>        
                    <p><span class="fa fa-eye"></span> View Count: ${news.total_view}</p>
                 
                    
                <label for="my-modal-3" class="btn modal-button">Read More</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal ">
  <div class="modal-box w-10/12 max-w-5xl modal-bottom sm:modal-middle">
<br>
<br>
<br>
    <label for="my-modal-3" class="btn btn-sm w-10 btn-circle absolute right-2 top-10">✕</label>
    
    <div class="modal-body">
       
        <img src="${news.image_url}" class="w-100 md:w-50 card-img-top" alt="...">
        <br>
        <span class = "text-gray-500"><span class="fa fa-eye"></span> View Count: ${news.total_view}   ||   
                Ratings: ${news.rating.number}     ||
                Author Review: ${news.rating.badge}     </span>
                <br>
            <h1 class="text-2xl text-gray-200 font-bold">${news.title}</h1>
            <span class="ms-2 text-gray-500">Published: ${news.author.published_date}</span>
                <p class="text-gray-400">${news.details}</p>
                <br>
        <div class="card-footer text-gray-500" src="https://t.me/mrxx32">
                    <img src="${news.author.img}" class="w-10 rounded" alt="">
                    <span class="fa fa-thumbs-up"> </span>
                    <span class="ms-2">${news.author.name}</span>
                    
        </div><br>
    
    </div>
    

  </div>
</div>      
                    </span>
                </div>

            </div>
        </div>
        </br>
        `
        div.appendChild(div1);
    }   
}


newsCard();


function settings(){
    alert('We are working on it! Stay tuned!');
}