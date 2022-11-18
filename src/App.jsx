import { useState , useEffect } from 'react'
import {HeaderComponent} from './components/Header/HeaderComponent'
import {JobGalery} from './components/Galery/JobGalery'
import {SideMenu} from './components/SideMenu/SideMenu'
import {MainPageContainer} from './components/MainPageContainer/MainPageContainer'
import axios from 'axios';

function App() {

 let discordCode
 
  const redirectedUrl = "https://c1ro.github.io/DevelopersUnion/?code"
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

    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1041478597317238975&redirect_uri=https%3A%2F%2Fc1ro.github.io%2FDevelopersUnion%2F&response_type=code&scope=identify%20email%20connections"
  } 
  

  return (

    
    <div className="App" >

    <HeaderComponent discordCode={discordCode}/>
    <MainPageContainer />

  
    </div>
  )
    

}



export default App
