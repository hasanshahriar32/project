

// function newsCards(){
//     window.location.href = "index.html?category=08";
// }

// onload = newsCards();

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
        a.setAttribute('href', `index.html?category=${category.category_id}`);
        a.classList.add('btn', 'btn-secondary', 'btn-sm', 'm-2');
        div.appendChild(a);
    

        // a.setAttribute('href', `index.html?category=${category.category_id}`);
        // a.setAttribute('href', `index.html?category=${category.category_id}`);
        // a.href = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
        div.appendChild(a);
        // console.log(a);
        
    }
}



// //category wise news
// function categoryWiseNews(){
//     const url = window.location.href;
//     const id = url.split('?category=')[1];
//     console.log(id);
//     fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
//     .then(res => res.json())
//     .then(data => displayNews(data.data))
// }

// function displayNews(data){
//     console.log(data);
//     const div = document.getElementById('news');
//     for(const news of data){
//         const div2 = document.createElement('div');
//         div2.classList.add('news');
//         div2.innerHTML = `
//         <img src="${news.image}" alt="">

//         <h3>${news.title}</h3>

//         <p>${news.description}</p>

//         <a href="${news.url}" target="_blank">Read More</a>

//         `
//         div.appendChild(div2);
//     }
// }




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
    onload = fetch(`https://openapi.programming-hero.com/api/news/category/08`)
    // fetch(`https://openapi.programming-hero.com/api/news/category/08`)
    fetch(`https://openapi.programming-hero.com/api/news/category/${category}`)
    
    .then(res => res.json())
    .then(data => displayNews(data.data))
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
                 
                    
                <label for="my-modal-3" onlcick="mod()" class="btn modal-button">Read More</label>


                    

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

//display a modal for news details with api call and display news details
function newsDetails() {
    const url = new URL(window.location.href);
    const newsId = url.searchParams.get('newsId');
    console.log(newsId);
    fetch(`https://openapi.programming-hero.com/api/news/${newsId}`)
    .then(res => res.json())
    .then(data => displayNewsDetails(data.data))
}
displayNewsDetails();




function settings(){
    alert('We are working on it! Stay tuned!');
}





//create spinner
function createSpinner(){
    const spinner = document.getElementById('spinner');
    spinner.classList.toggle('d-none');
}


// //modal load
function mod(){
    console.log('nodal');
    const modal = document.getElementById('modal');
    modal.classList.toggle('d-none');
    modal.innerHTML = `
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
        <a class="card-footer text-gray-500" href="https://t.me/mrxx32">
                    <img src="${news.author.img}" class="w-10 rounded" alt="">
                    <span class="fa fa-thumbs-up"> </span>
                    <span class="ms-2">${news.author.name}</span>
                    
        </a><br>
     `

}