import React from 'react'
import Styles from './GaleryStyles.css'




export const JobPost = (props) => {
function select(){

console.log(props.JobId2)
props.setSelection(props.JobId2)
}

  return (
    <div className={props.selection === props.jobId ? "Active2" : "PostContainer"} onClick={select}>
    <div className='PostTitle'>
        <h2>{props.title + " #" + props.JobId2.toString(16)}</h2>

    </div>
    <h2 id='Pay'>Payment:</h2>
    <h3 id='PayAmount'>{props.payment}</h3>
    <h3 id='PaymentType'>Payment Type : {props.paymentType}</h3>
    <h3 id='DescriptionTitle'>Description</h3>
    <p className='Description'>{props.description.slice(0, 200)}...</p>
    <p id='readMore'>Click to read more</p> 
   
</div>
  )
}

export default JobPost