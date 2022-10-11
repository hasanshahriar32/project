import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
import Calculate from '../Utilities/Calculate';
import './Tasks.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let total = 0;
let notify = () => toast("Full Marks! 😉");

const Tasks = () => {
      //declare state to load data
  const [tasks, setTasks] = useState([]);
  const [cart, setCart]= useState([]);

  //load data from database
  useEffect(() => {
    fetch ('data.json') 
    .then(res => res.json())
    .then(data => setTasks(data))
  }, [])
  const handleAddToCart = (products)=>{
      console.log('clicked', products.id);

      const button_id = products.id;

      //count how many times a button is clicked
      const count = localStorage.getItem(button_id);
      if(count){
          const newCount = parseInt(count) + 1;
          localStorage.setItem(button_id, newCount);
      }
      else{
          localStorage.setItem(button_id, 1);
      }


    //disable button after click
    document.getElementById(button_id).classList.add('btn-success');
    document.getElementById(button_id).classList.remove('btn-outline');
    document.getElementById(button_id).innerText = 'Added ✅'+ localStorage.getItem(button_id);
    // document.getElementById(button_id).disabled = true;
    //if button is clicked more than 3 times then disable it and show toast
    if(localStorage.getItem(button_id) > 3){
        document.getElementById(button_id).disabled = true;
        //create toast with error message and show how many times a button is clicked
        let errorClick = () => toast("You have clicked "+localStorage.getItem(button_id)+" times! 🤯");

        errorClick();


    }


    
    // cart.push(products);
    const newCart = [...cart , products];
    setCart(newCart);

    //calculate total
    //calculate total time
    
    total = total + parseInt(products.time);
    // console.log(total);

      //calculate total time 
      //if break time is not added then show toast
        if(localStorage.getItem('break') == null){
            let errorBreak = () => toast("Please add break time! 🥵");
            errorBreak();
        }
        else{
            //if break time is added then calculate total time
            const breakTime = localStorage.getItem('break');
            const totalTime = total + parseInt(breakTime);
            //calculate how many times a button is clicked
            const count = localStorage.getItem(button_id);
            //calculate total time
            const totalTaskTime = totalTime * count;
            // console.log(totalTaskTime);
            //show total time
            document.getElementById('totalMins').innerHTML = 'Total Time: '+totalTaskTime+'mins';
    
    
        }

            


    
}
 

   

    return (
        
        <div className='m-3 flex flex-col md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-4 h-full'>
            
            <div className='col-span-2 md:col-span-3 lg:col-span-4 grid md:grid-cols-2 lg:grid-cols-3 h-full gap-4' >
            {
                tasks.map(task =><Task handleAddToCart={handleAddToCart} key= {task.id} task={task}></Task> )
            }
            </div>
        <div className= 'w-full grid-cols-2 col-span-2 md:col-span-1 cart-container text-success-content bg-secondary'>
            <div className=''>
            <h1 className='text-3xl text-info-content'>My Schedule</h1>
            <br />
            <div className='flex justify-evenly items-center '>
                <div class="avatar">
                <div class="w-12 rounded-full">
                    <img  src="https://placeimg.com/192/192/people" />
                </div>
                </div>
                <h1 className='text-2xl text-info-content'>Md. Hasan</h1>
            </div>
            <br />
            <div>
                {/* card  */}
                <div class="stats px-5 md:stats-horizontal">
  
                    <div class="p-2 px-2">
                        <div class=" stat-title">Weight</div>
                        <div class="">60KG</div>
                    </div>
                    
                    <div class="p-2 px-2">
                        <div class="stat-title">Height</div>
                        <div class="">170inch</div>
                    </div>
                    
                </div>
            </div>
            
            <small>Total Selected Items: {cart.length}</small>
            <br />
            <br />
            <h2 className='text-2xl'>Add a Break</h2>
            {
                <div id="btn" class="btn-group flex flex-wrap justify-center items-center">
                <input type="radio" name="options" data-title="15m" onClick={()=>handleClick("15")} id='15' class="btn" />
                <input type="radio" name="options" data-title="20m"  onClick={()=>handleClick("20")} id='20' class="btn" />
                <input type="radio" name="options" data-title="30m" onClick={()=>handleClick("30")} id='30' class="btn" />
                <input type="radio" name="options" data-title="60m" onClick={()=>handleClick("60")} id='60' class="btn" />
                </div>
                //show clicked button id


            
                }
            
            <br /><br /><h1 className='text-2xl ' id='totalMins'>Used Time</h1>
            <br />
            <h1 className='text-xl text-info-content'>Daily Work: {total}mins</h1>
            <h1 id='timing'> Break added:{} </h1>

            {/* toast button  */}
            <div>
        <button className='btn btn-success' onClick={notify}>Completed.</button>
        <ToastContainer />
      </div>
                


            </div>
            
        </div>
        </div>
    );
};
// function toast(){
//     const toast = document.getElementById('toast'); 
//     alert('Congratulation! You have completed your daily routine');
// }
//get id of clicked button
function handleClick(is){
    console.log(is);
    
    document.getElementById('timing').innerHTML = 'Break added: '+is+'mins';
    //set to local storage
    localStorage.setItem('break',is);
    //get from local storage
    

    //calculate total time
} 
//show break time from local storage
function showBreak(){
    const breakTime = localStorage.getItem('break');
    console.log(breakTime);
    //if break time is not added then show zero
    if(breakTime == null){
        document.getElementById('timing').innerHTML = 'Break added: 0mins';
    }
    else{
        //if break time is added then show break time
        document.getElementById('timing').innerHTML = 'Break added: '+breakTime+'mins';
    }
    //clicked button
    document.getElementById(breakTime).checked = true;

}
//call function after page load
window.onload = showBreak;
// function data(){
//     const btns = document.getElementById('btn');
//     btns.addEventListener('click', function(e){
//         const btn = e.target;
//         const title = btn.getAttribute('data-title');
//         console.log(title);
//     })
// }
export default Tasks;