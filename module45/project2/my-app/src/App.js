import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter /> */}
      <ExternalUsers />
    </div>
  );
}

function ExternalUsers(){
  const [users, setUsers]=useState([]);
  // useEffect( ()=>{},[])
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  //here [] means that it will run only once
  //[] is called dependency, without dependency it will run infinite times
  return (
    <div>
      <h1>External Users</h1>
      
        {
          users.map(user => <Users name={user.name} age={user.age} email={user.email}></Users>)
        }
    </div>
  );
  
}
function Users(props){
  return(
    <div className='product'>
      <h1>Name: {props.name}</h1>
      {/* <h2>Age: {props.age}</h2> */}
      <h4>Email: {props.email}</h4>
    </div>
  );
}

function Counter(){
 const [count, setCount] = useState(10);
 console.log(count);
 console.log(setCount);
 const increaseCount = () => setCount(count + 1);
 const decreaseCount = () => setCount(count - 1);

//  const increaseCount = () => {
//   const newCount = count + 1;
//   setCount(newCount);
//  }
  return(
    <div className="counter">
      <h1>Counter {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
// function App() {
//   const products = [
//     {name: 'Photoshop', price: '$90.99'},
//     {name: 'Illustrator', price: '$60.99'},
//     {name: 'PDF Reader', price: '$6.99'},
//     {name: 'Premiere El', price: '$249.99'}
//   ]
//   return (
//     <div className="App">
//       {
//         products.map(product=> <Product name={product.name} price= {product.price}></Product>)
//       }
//       {/* <Product name = "laptop"></Product>
//       <Product name = "iPhone" price = "78000"></Product>
//       <Product name = "iWatch" price = "8000"></Product> */}
//     </div>
//   );
// }

// function Product(props){
//   return (
//     <div className="product">
//       <h1>Product: {props.name}</h1>
//       <p>Price: {props.price}</p>
//     </div>
//   );
// }

export default App;
