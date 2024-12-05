import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import Joblistings from '../components/Joblistings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
        <Hero title="This is the Main Title" subtitle="This is a Subtitle"/>
        <HomeCards/>
        <Joblistings isHome={true}/>
        <ViewAllJobs/>


        
    </>
  
  )
}

export default HomePage