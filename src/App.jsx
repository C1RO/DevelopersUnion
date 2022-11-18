import { useState , useEffect } from 'react'
import {HeaderComponent} from './components/Header/HeaderComponent'
import {JobGalery} from './components/Galery/JobGalery'
import {SideMenu} from './components/SideMenu/SideMenu'
import {MainPageContainer} from './components/MainPageContainer/MainPageContainer'
import axios from 'axios';
function App() {

 let discordCode
  const clientId = "1041478597317238975"
  const clientSecret = "qk3aPPrHP0OLEC5kYfKvprVrzKiahcKT"
  const redirectedUrl = "http://127.0.0.1:5173/?code"
  if (window.location.href.startsWith(redirectedUrl)){
   discordCode = window.location.href.split("?code="); 
   console.log(discordCode[1])

   
  }
  if(window.localStorage.getItem('name') === null){
    window.localStorage.setItem('name', "");
    window.localStorage.setItem('userId', "");
    window.localStorage.setItem('appliedJobs', [0]);

    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1041478597317238975&redirect_uri=http%3A%2F%2F127.0.0.1%3A5173%2F&response_type=code&scope=identify%20email%20connections%20guilds%20guilds.join"
  } 
  

  return (

    
    <div className="App" >

    <HeaderComponent discordCode={discordCode}/>
    <MainPageContainer />

  
    </div>
  )
    

}



export default App
