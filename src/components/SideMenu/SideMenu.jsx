import React, { useState, useEffect } from 'react';
import Styles from './SideMenu.css'
import { Link, Route, Routes, useMatch, useResolvedPath } from "react-router-dom"
import Loading from '../../Data/Loading';
import axios from 'axios';




export const SideMenu = ({ setPage }) => {
    const [currentPage, setButton] = useState("/");
    const [soundJobData, setSoundJobData] = useState()
    const [scriptJobData, setscriptJobData] = useState()
    const [modelingJobData, setmodelingJobData] = useState()
    const [animationJobData, setanimationJobData] = useState()
    const [buildingJobData, setbuildingJobData] = useState()

    const DataAcessMasterKey = "$2b$10$XoPlUfOuBJYwZB6FKD4/gu4iDf.AHgEMtcLb8IexyJ1BvpPPPOci."
        const fetchData = async () => {
        const Data = await axios.get("https://dudatabase-5285e-default-rtdb.firebaseio.com/JobsData.json?auth=VC1KL0hRZOLdQYoGpiu7pfJO3IRA4EkMBroRRoXW")
           console.log(Data)
        if (Data.status === 200) {

           setSoundJobData(Object.values(Data.data.Data.SoundJobs));
           setscriptJobData(Object.values(Data.data.Data.ScriptingJobs));
           setmodelingJobData(Object.values(Data.data.Data.ModelingJobs));
           setanimationJobData(Object.values(Data.data.Data.AnimationJobs)); 
           setbuildingJobData(Object.values(Data.data.Data.BuildingJobs)); 
           setPage(Object.values(Data.data.Data.ScriptingJobs))
          

        }



    }
    useEffect(() => {

        fetchData()
    }, [])


    function setPageHandler(data, to) {
        setPage(data)
        setButton(to)
    }
    return (
        <nav className='Container'>
                  


            <Link to="/">
                <button className={currentPage === "/" ? "Active" : "button"} id="active" onClick={() => setPageHandler(scriptJobData , "/")}>

                    Scripting
                </button>

            </Link>
            <Link to="/Building">
                <button className={currentPage === "/Building" ? "Active" : "button"} onClick={() => setPageHandler(buildingJobData  , "/Building")}>
                    Building
                </button>

            </Link>
            <Link to="/Modeling">
                <button className={currentPage === "/Modeling" ? "Active" : "button"} onClick={() => setPageHandler(modelingJobData , "/Modeling")}>
                    Modeling
                </button>

            </Link>
            <Link to="/Sound">
                <button className={currentPage === "/Sound" ? "Active" : "button"} onClick={() => setPageHandler(soundJobData , "/Sound")}>
                    Sound
                </button>

            </Link>
            <Link to="/Animation">
                <button className={currentPage === "/Animation" ? "Active" : "button"} onClick={() => setPageHandler(animationJobData , "/Animation")}>
                    Animation
                </button>

            </Link>



        </nav>
    )
}



export default SideMenu