import React, { useState } from 'react';
import Styles from './Selected.css'
import axios from 'axios';
import qs from 'qs'
export const SelectedJobPost = (props) => {
  
  function SaveDataToLocalStorage(data)
  {
      var a = [];
      a = JSON.parse(window.localStorage.getItem('appliedJobs')) || [];
      a.push(data);
      
      window.localStorage.setItem('appliedJobs', JSON.stringify(a));
  }
  const SendMessage = (props, e) => {
   
  
  if (props.jobId != 0 && !JSON.parse(window.localStorage.getItem('appliedJobs').includes(props.JobId2))) {
      SaveDataToLocalStorage(props.JobId2)
      

    e.preventDefault();
    const name =  window.sessionStorage.getItem('name'); 
    const userId =  window.sessionStorage.getItem('userId'); 

    const params = qs.stringify({
      username: "DuBot",
      avatar_url: "",
      content:  name +"-" + userId +"-" + props.title + "-" + props.brokerId +"-" + props.JobId2
    })
    const headers2 = {
      'content-type': 'application/json'
    };
  axios.post(
    "https://discord.com/api/webhooks/1042871202819100673/vyfwuovMvYD5ZzdGnHwpDGG0Sj5piWZcDWvRQou_-8Al2aLGTyQy8wCMtBAP_evv7J04",
      params,
      headers2
    ).then(result => {
  
  console.log(result.data)
    })
  }else{
    if (props.jobId == 0){
      alert("Invalid job please choose a new job")

    }else{
      alert("You already applied to this job")

    }


  }
  }







  return (
    <div className='SelectedContainer'>
    <h2 className='title'>{props.title}</h2>
    <h3 className='title' id='Pay'>Payment : {props.payment}</h3>
    <h3 className='title'>Payment Type : {props.paymentType}</h3>
    <h3 className='title'>Description</h3>
    <p className='DescriptionSelected'>{props.description}
        </p>
   <button onClick={e => SendMessage(props, e)} className='ApplyButton'>Apply</button>
</div>
  )
}

export default SelectedJobPost