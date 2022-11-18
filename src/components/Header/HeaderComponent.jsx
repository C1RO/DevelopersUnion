import Logo from '../../assets/DuLogo.png'
import Styles from './header.css'
import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useMatch, useResolvedPath } from "react-router-dom"
import axios from 'axios';
import qs from 'qs'
export const HeaderComponent = (props) => {

    const MY_CLIENT_ID = "1041478597317238975"
    const  MY_SECRET_ID = "qk3aPPrHP0OLEC5kYfKvprVrzKiahcKT"
    const [name, setName] = useState(window.localStorage.getItem('name'));
    const [discrminator, setDiscriminator] = useState(window.localStorage.getItem('0000'));
    const [userId, setUserId] = useState(window.localStorage.getItem('userId'));

    const headers2 = {
      'content-type': 'application/x-www-form-urlencoded'
    };
    try{
        if (props.discordCode !== undefined || window.localStorage.getItem('name') === "name"){
        const data = qs.stringify({
            client_id: MY_CLIENT_ID,
            client_secret: MY_SECRET_ID,
            grant_type: 'authorization_code',
            code: props.discordCode[1],
            redirect_uri: 'http://127.0.0.1:5173/'
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
         window.localStorage.removeItem('name');
          window.localStorage.setItem('name', result2.data.username + "#" +result2.data.discriminator);
          window.localStorage.setItem('userId', result2.data.id);

          setName(result2.data.username)
          setDiscriminator(result2.data.discriminator)
          setUserId(result2.data.id)


         



        });            
        });

       
        
       

    }
    }catch(error){

    }
   

   
    return (
        <nav>
            <img src={Logo} />
            <h1>Developer Union | Job Board</h1>
            <h1 id='userName'>{window.localStorage.getItem("name")}</h1>


        </nav>
    )
}
