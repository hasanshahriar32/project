//use localstorage to manage data
//path: src\Components\Utilities\useLocalStorage.js




const addToDatabase = id =>{

    let shoppingCart;

    //get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart){
        shoppingCart = JSON.parse(storedCart);
        console.log('stored cart: ', storedCart);
    }
    else{
        shoppingCart = {};
    }
    
    let numNewQuantity;
    //add quantity to the shopping cart
    const quantity = shoppingCart[id];
    if (quantity){
        const newQuantity = quantity+1;
        shoppingCart[id] = newQuantity;
        numNewQuantity = newQuantity;
        
    }
    else{
        shoppingCart[id] = 1;
        numNewQuantity = 1;
    }
    // console.log(quantity);
    console.log('shopping cart is: ', shoppingCart);


    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    
    //  quantity = localStorage.getItem(id);
    // if (quantity){
        //     console.log('exist');
        //     const newQuantity = parseInt(quantity)+1;
        //     localStorage.setItem(id, newQuantity);
        // }
        // else{
    //     localStorage.setItem(id, 1);}
    return ( 0 , numNewQuantity );
}


const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

        }
    }
}


export {addToDatabase,removeFromDb}