import React, { useState } from 'react';
import Styles from './GaleryStyles.css'
import { JobPost } from './JobPost.jsx'
import { SelectedJobPost } from './SelectedJobPost'
import Loading from "../../Data/Loading"

import { Route, Routes } from "react-router-dom"
export const JobGalery = ({currentPagex}) => {
    const[selection , setSelection] = React.useState(1)
    const jobPosts = currentPagex.map(item => {

        if (item.jobId != 0 && item.active === true)  {
        return (
        
            
            <JobPost
                key={currentPagex.length >= 1 ? item.jobId : Loading[2].jobId}
                jobId={currentPagex.length >= 1 ? item.jobId : Loading[2].jobId}
                title={currentPagex.length >= 1 ? item.title : Loading[2].title}
                payment={currentPagex.length >= 1 ? item.payment : Loading[2].payment}
                paymentType={currentPagex.length >= 1 ? item.paymentType : Loading[2].paymentType}
                description={currentPagex.length >= 1 ? item.description : Loading[2].description}
                brokerId={currentPagex.length >= 1 ? item.brokerId : Loading[2].description}
                JobId2={currentPagex.length >= 1 ? item.JobId2 : Loading[2].jobId}

                selection={selection}
                setSelection={setSelection}
            />
            
        )
        }else{
            if (currentPagex.length <= 1){
            return(
            <JobPost
            key={currentPagex.length >= 1 ? item.jobId : Loading[2].jobId}
            jobId={currentPagex.length >= 1 ? item.jobId : Loading[2].jobId}
            title={currentPagex.length >= 1 ? item.title : Loading[2].title}
            payment={currentPagex.length >= 1 ? item.payment : Loading[2].payment}
            paymentType={currentPagex.length >= 1 ? item.paymentType : Loading[2].paymentType}
            description={currentPagex.length >= 1 ? item.description : Loading[2].description}
            brokerId={currentPagex.length >= 1 ? item.brokerId : Loading[2].description}
            JobId2={currentPagex.length >= 1 ? item.JobId2 : Loading[2].jobId}

            selection={selection}
            setSelection={setSelection}
            />

            )
            }
        }
    })

    return (
        <div className='GaleryContainer'>

            <div className='PostRow'>

                <Routes>
                    <Route path="/" element={jobPosts} />
                    <Route path="/Building" element={jobPosts} />
                    <Route path="/Modeling" element={jobPosts} />

                    <Route path="/Sound" element={jobPosts} />
                    <Route path="/Animation" element={jobPosts} />


                </Routes>



            </div>

            <div className='SelectedPost'>
                <SelectedJobPost
                    key={jobPosts[selection] === undefined ? Loading[2].jobId : jobPosts[selection].props.jobId}
                    jobId={jobPosts[selection] === undefined ? Loading[2].jobId : jobPosts[selection].props.jobId}
                    title={jobPosts[selection] === undefined ? Loading[2].title : jobPosts[selection].props.title}
                    payment={jobPosts[selection] === undefined ? Loading[2].payment : jobPosts[selection].props.payment}
                    paymentType={jobPosts[selection] === undefined ? Loading[2].paymentType : jobPosts[selection].props.paymentType}
                    description={jobPosts[selection] === undefined ? Loading[2].description : jobPosts[selection].props.description}
                    brokerId={jobPosts[selection] === undefined ? Loading[2].brokerId : jobPosts[selection].props.brokerId}
                    JobId2={jobPosts[selection] === undefined ? Loading[2].jobId : jobPosts[selection].props.JobId2}

                />

            </div>


        </div>
    )
}

export default JobGalery