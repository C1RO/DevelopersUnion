import Logo from '../../assets/DuLogo.png'
import Styles from './header.css'
import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useMatch, useResolvedPath } from "react-router-dom"
import axios from 'axios';
import qs from 'qs'


export const HeaderComponent = (props) => {

    const MY_CLIENT_ID = "1041478597317238975"
    const  MY_SECRET_ID = "qk3aPPrHP0OLEC5kYfKvprVrzKiahcKT"
    const [name, setName] = useState(window.sessionStorage.getItem('name'));
    const [discrminator, setDiscriminator] = useState(window.sessionStorage.getItem('0000'));
    const [userId, setUserId] = useState(window.sessionStorage.getItem('userId'));

    const headers2 = {
      'content-type': 'application/x-www-form-urlencoded'
    };
   
    const fetchData = async () => {
    
      var interval = setInterval(function() {
        if(props.discordCode == "undefined" || props.discordCode == ""){
        //Do Something While Waiting / Spinner Gif etc.
        }else{
        clearInterval(interval);
        }
        }, 1000); 
       const data = qs.stringify({
  client_id: MY_CLIENT_ID,
  client_secret: MY_SECRET_ID,
  grant_type: 'authorization_code',
  code: props.discordCode[1],
  redirect_uri: 'https://c1ro.github.io/DevelopersUnion/'
})
axios.post(
  'https://discord.com/api/v10/oauth2/token',
  data,
  headers2
).then(result => {

console.log(result.data)

axios.get('https://discord.com/api/users/@me',{
  headers:{
      Authorization: 'Bearer ' + result.data.access_token
  }
}


  
).then(result2 => {
  console.log(result2)
window.sessionStorage.removeItem('name');
window.sessionStorage.setItem('name', result2.data.username + "#" +result2.data.discriminator);
window.sessionStorage.setItem('userId', result2.data.id);

setName(result2.data.username)
setDiscriminator(result2.data.discriminator)
setUserId(result2.data.id)






});            
});

   



}
useEffect(() => {

   fetchData()
}, [])

   
    return (
        <nav>
            <img src={Logo} />
            <h1>Developer Union | Job Board</h1>
            <h1 id='userName'>{window.sessionStorage.getItem("name")}</h1>


        </nav>
    )
}
