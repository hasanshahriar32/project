import React from 'react';

const Option = (props) => {
    const handleClick = props.handleClick;
    // console.log(props.option);
    // console.log(handleClick)
    //disable bu
    return (
        <div className='flex justify-center'>
            <div className="form-control w-60">
  <label className="label cursor-pointer hover:bg-secondary p-2 m-3">
    <span   className="label-text">{props.option}</span> 
    <input onClick={()=>handleClick(props.option)} type="checkbox" name="checkbox-6"  className="checkbox"   />
  </label>
</div>
        </div>
    );
};

export default Option;