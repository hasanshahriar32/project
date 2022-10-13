import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleQuiz from './SinlgeQuiz/SingleQuiz';

const TopicQuiz = () => {
    const quizData = useLoaderData().data;
    console.log(quizData);
    let correctAns = 0;
    const correctCount = (count)=>{
        // console.log(count);
        correctAns = correctAns + count;
        if (correctAns <=quizData.total){
           
        document.getElementById('correctShow').innerText = `Correct: ${correctAns}`;
        document.getElementById('leftShow').innerText = `Wrong: ${quizData.total - correctAns}`;
        }
        // console.log(correcrAns);

    }
    return (
        <div>
            <img className='w-36 m-5' src={quizData.logo} alt="" />
            <h1 className='text-4xl m-2'>Quiz On {quizData.name}</h1>
            <h2 className='text-2xl mb-5'>Total Quiz: {quizData.total}</h2>
            <h3><span className='text-success' id='correctShow'>Correct: {correctAns}</span> <span className='text-error' id='leftShow'>Left: {quizData.total - correctAns}</span></h3>
            <div className='flex justify-center flex-col items-center'>
            {
                quizData.questions.map(question => <SingleQuiz correctCount={correctCount} question={question} key={question.id}></SingleQuiz>)
            }
            </div>
            <div className="btn-group grid grid-cols-2">
            {
                (quizData.id==1)?
                    <Link to={`/topics/5`}><button className="btn btn-outline">Previous page</button></Link>
                :(quizData.id==2)? 
                <Link to={`/topics/1`}><button className="btn btn-outline">Previous page</button></Link>
                :(quizData.id==4)?
                <Link to={`/topics/2`}><button className="btn btn-outline">Previous page</button></Link>
                : 
                <Link to={`/topics/4`}><button className="btn btn-outline">Previous page</button></Link>
            }
            {
                (quizData.id==1)?
                    <Link to={`/topics/2`}><button className="btn btn-outline">Next page</button></Link>
                :(quizData.id==2)? 
                <Link to={`/topics/4`}><button className="btn btn-outline">Next page</button></Link>
                :(quizData.id==4)?
                <Link to={`/topics/5`}><button className="btn btn-outline">Next page</button></Link>
                : 
                <Link to={`/topics/1`}><button className="btn btn-outline">Next page</button></Link>
            }
</div>
        </div>
    );
};

export default TopicQuiz;