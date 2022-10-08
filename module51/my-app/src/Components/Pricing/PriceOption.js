import { click } from '@testing-library/user-event/dist/click';
import { stringify } from 'postcss';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './PriceOption.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const PriceOption = ({option}) => {
    const notify2 = (id) => toast.warning("We have reset your "+ option.name +" plan successfully!");	
    const notify = (valueObj) => {
        console.log(valueObj)
        //don't load toast on refresh window

        
            //if window does not load, then show. else don't show
            if (window.performance) {
                if (performance.navigation.type == 1) {
                    console.info("This page is not reloaded");
                    toast.success( `You Are A ${valueObj} Subscriber!!`, {
                        //if there is one toast at screen then don't show another toast
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,

                    });
                


                } 
            }

            
            
            
    };
    const [activee , setActivee]= useState(true);
    //listen to the click event
    const handleClick = (e) => {
        setActivee(!activee);

        //get the id of the clicked element
        const id = e.target.id;
        //get the value of the clicked element
        console.log(id);
        //get the value of the clicked element
        console.log(e.target.value);
        //save the value of the clicked element in the local storage
        localStorage.setItem('checked', e.target.value);
        //save the id 
        //call toast when the button is clicked
        notify(e.target.value);
        localStorage.setItem('btnId', e.target.id);
        //disable other elements
        if (id !==true){
            //make all other elements inactive
            for (let i = 1; i < 4; i++) {
                //disble all other elements except the clicked one
                if (i !== id) {
                    document.getElementById(i).disabled = true;
                    document.getElementById(i).classList.add('disabled');
                    document.getElementById(i).classList.add('justify-center');
                    document.getElementById(i).classList.add('items-center');
                    document.getElementById(i).classList.add('flex');
                    //enable the clicked element
                    // document.getElementById(id).disabled = false;
                    // document.getElementById(id).style.backgroundColor = "black";
                    document.getElementById(i).style.backgroundColor = "gray";
                    document.getElementById(i).style= "visiblity:hidden;";
                    // document.getElementById(i).style = "text-500";
                    document.getElementById(id).innerText ="✅ Subscribed " ;
                    
                    
                }
               
                
            }
        }


    }
    //get the value of the clicked element from the local storage and call the function with event
    useEffect(() => {
        const checked = localStorage.getItem('checked');
        const btnId = localStorage.getItem('btnId');
        if (checked) {
            handleClick({ target: { id: btnId, value: checked } });
            //colsole the checked value
            console.log(btnId, checked);
            //get the value which are not checked
            for (let i = 1; i < 4; i++) {
                const intBtn = parseInt(btnId);
                if (i !== intBtn) {
                    // document.getElementById(i).disabled = true;
                    // document.getElementById(i).classList.add('disabled');
                    //enable the clicked element
                    // document.getElementById(id).disabled = false;
                    
                    //load default innet text
                    document.getElementById(i).innerText = "Select";
                    //hide enableAll button without current clicked element
                    // document.getElementById(i).style.display = "none";
                    
                    
                    if (i){
                        const parsed = parseInt(i);
                        // document.getElementById(parsed).style.display = "none";
                        document.getElementsByClassName('enableBtn').style = "display:none";
                    }
                    else{
                        document.getElementById(i).style.backgroundColor = "green";
                    }


                }
            }



        }
    }, []);
    
    //function to enable all elements
    const enableAll = (e) => {
        for (let i = 1; i < 4; i++) {
            setActivee(true);
            document.getElementById(i).disabled = false;
            document.getElementById(i).classList.remove('disabled');
            document.getElementById(i).style.backgroundColor = "rgb(34 197 94)";
            //add background color to the hovered element
            document.getElementById(i).addEventListener('mouseover', function () {
                document.getElementById(i).style.backgroundColor = "black";
                document.getElementById(i).style.color = "rgb(34 197 94)";
            });
            // document.getElementById(i).style.hover.backgroundColor = "black";
            //remove data from the local storage
            localStorage.removeItem('checked');
            //display hidden on load of the page
            document.getElementById(i).style.display = "block";
            document.getElementsByClassName('enableAll').display = "none";
            //load default innet text
            const InnerId = localStorage.getItem('btnId');
            document.getElementById(InnerId).innerText = "Select";
            //call toast when the button is clicked
            if (i==e.target.id) {
                notify2(e.target.id);
            }



            
        }
    }
    
    return (
        <div className='w-full bg-green-500 hover:bg-green-600 hover:shadow-lg shadow-green-900'>
            <div className='m-3 flex flex-col align-center justify-between rounded-md p-6'>
                <div>
                {/* features  */}
                <h2 className='text-2xl font-bold '>{option.name} Features</h2>
                <div>
                <ol className=' my-5 list-inside'>
                    {
                        option.features.map(feature => <li  className='text-lg text-left '>☑️{feature}</li>)
                    }
                </ol>
                </div>
                <span className='text-2xl font-serif font-bold py-3'>${option.price}</span>
                <span>/month</span><br />
                </div>
                <div className='flex flex-between'>
                <button id={option.id} value={option.name}  onClick={handleClick} className= 'price-option active duration-500 ease-in-out btn btn-success font-serif font-bold text-justify hover:bg-black active:text-green-700 hover:text-green-500 bg-green-500  border border-black  p-3 rounded hover:border-green-400  w-40' ><span className=' visible  active:hidden '>{activee?<span className='text-left active:px-5'>{option.name}? ➡️</span>:<div>{notify} "✅ Subscribed!"</div>}</span></button>
                {/* create a refresh buttton to reset the state */} 
                <button onClick={enableAll} id={option.id} className='enableBtn'>{activee?"":"  ❌"}</button>
                {/* <button onClick={notify}>Notify !</button> */}
                <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );

};

export default PriceOption;