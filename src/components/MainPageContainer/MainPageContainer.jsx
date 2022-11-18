import React, { useState, useEffect } from 'react';
import {JobGalery} from '../Galery/JobGalery'
import {SideMenu} from '../SideMenu/SideMenu'
import Styles from './MainPageStyle.css'
import Loading from "../../Data/Loading"
import axios from 'axios';

export const MainPageContainer = () => {
  const [currentPagex, setPage] = useState(Loading);
  
  
  return (
    <div className='MainPageStyle'>
    <SideMenu setPage={setPage}/>
    <JobGalery currentPagex={currentPagex}/>

    </div>
  )
}

export default MainPageContainer