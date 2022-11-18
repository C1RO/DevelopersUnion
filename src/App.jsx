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
  const redirectedUrl = "https://c1ro.github.io/DevelopersUnion/?code"
  const discordUrl = process.env
  if (window.location.href.startsWith(redirectedUrl)){
   discordCode = window.location.href.split("?code="); 
   console.log(discordCode[1])
   

   
  }
  if(window.sessionStorage.getItem('name') === null){
    window.sessionStorage.setItem('name', "");
    window.sessionStorage.setItem('userId', "");
    if (window.localStorage.getItem('appliedJobs') === null ||window.localStorage.getItem('appliedJobs') === "" || window.localStorage.getItem('appliedJobs') === 0 ){
      window.localStorage.setItem('appliedJobs', [0]);

    }

    window.location.href = process.env.redirectDiscordUrl
  } 
  

  return (

    
    <div className="App" >

    <HeaderComponent discordCode={discordCode}/>
    <MainPageContainer />

  
    </div>
  )
    

}



export default App
