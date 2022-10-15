import React from 'react';
import './SingleQuiz.css'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import Option from './Option';
import 'react-toastify/dist/ReactToastify.css';

const SingleQuiz = (props) => {
    const [seeAnswer, setSeeAnswer] = React.useState(false);
    const question = props.question;
    const clickNum = props.clickSum;
    const correctCount = props.correctCount;
    const notify1 = () => toast.success("woop woop! you got it right", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // theme: "colored",
        });
    const notify2 = () => toast.error(`uh oh! wrong. Try next one. Correct Answer: ${question.correctAnswer}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // theme: "colored",
        
        });
    const notify3 = () => toast.warning("oops! you already unrevealed the answer. It won't be counted as correct answer.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // theme: "colored",
        });
        const seeAns = (props) => toast.info(`ANS: ${props}`)
    useEffect (()=>{
        if(seeAnswer){
            // document.getElementById('ansId').innerText = question.correctAnswer;
            seeAns(question.correctAnswer);
        }
        else{
          document.getElementById('ansId').innerText = "";
        }
    }
    ,[seeAnswer])


    const wrong = (correctAnswerString) => {
    //   document.getElementById(question.id).classList.add('wrong');
    //   //disable all buttons
    //   document.getElementById(question.id).querySelectorAll('checkbox').forEach(btn => btn.disabled = true);
    //   //show correct answer
    //   document.getElementById(question.id).querySelector(`[data-id='${question.correct_answer}']`).classList.add('correct');
    //   //show toast
    //   console.log('uh oh! try again');
    document.getElementById(question.id).querySelectorAll('.checkbox').forEach(btn => btn.disabled = true );
    //color the clicked option red
    // document.getElementById(question.id).querySelectorAll('.checkbox').forEach(btn => btn.classList.add('bg-danger text-white btn-danger border-danger'));
    //show toast
      notify2(correctAnswerString);
    //   const seeAns = (props) => toast.info(`ANS: ${props}`)
    };
    const correct = (id) => {
        // document.getElementById(question.id).classList.add('bg-green-300');
        // console.log('woop woop! you got it right');
        // if any wrong answer is not selected
        if (question.correctAnswer === id && !seeAnswer) {
            document.getElementById(question.id).querySelectorAll('.checkbox').forEach(btn => btn.disabled = true);
        
        notify1();
        correctCount(1);
        }
        else {notify3();
            document.getElementById(question.id).querySelectorAll('.checkbox').forEach(btn => btn.disabled = true);
        }
    };

    // console.log(question);
    const correctAnswer = question.correctAnswer;
   
    let clickSum = 0;
    const optionClick = question.option;
    const handleClick = (optionClick)=>{
        console.log('clicked', optionClick);
        (optionClick==question.correctAnswer)?correct(optionClick):wrong(optionClick);
        clickSum++;
        clickNum(clickSum);
        // console.log(clickSum);
    
    }
    return (
        <div id={question.id}  className='bg-base-200 hover:bg-base-300 m-3 w-[80%]  py-5 border-primary border-double-line'>
            {/* <ToastContainer className="w-2"/> */}
            {/* show toast outside the div at the top of the page */}
            <ToastContainer />
            
            <div className='text-lg '><div dangerouslySetInnerHTML={{__html: `${question.question}`}} className=''></div> <button onClick={()=>setSeeAnswer(!seeAnswer)} className='text-info'>ANS ➡️</button></div>
            <p id='ansId'></p>
            <div className='grid grid-col-1  md:grid-cols-2 justify-evenly'>
            {
                question.options.map(option=><Option handleClick={handleClick} option={option}></Option>)
            }
            </div>
            {/* 
            
            
            
            */}
            
        </div>
    );
};

export default SingleQuiz;