import React from 'react';
import { useEffect,useState } from 'react';
import Joblisting from './Joblisting';
import Spinners from './Spinners';




const Joblistings = ({isHome=false }) => {

  const [jobs,setJobs]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error, setError] = useState(null); // Make sure to define error state

  useEffect(()=>{
    const fetchJobs = async () => {
      try {
        
          const res = await fetch(`/api/jobs?timestamp=${new Date().getTime()}`);
          if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
          }
  
          const data = await res.json();
          setJobs(data); // Assuming setJobs is defined to update your state
      } catch (error) {
          console.error('Error fetching jobs:', error.message);
          setError(error.message); // Handle error state if applicable
      } finally {
          setLoading(false); // Assuming loading is defined to manage loading state
      }
  };

    fetchJobs();

  },[])


  const joblistings=isHome? jobs.slice(0,3):jobs;
  return (
    <section className="bg-blue-200 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome? "Recent  jobs" : "Browse Jobs"}
      </h2>
      
      {loading ? (
    <Spinners loading={loading}/>
) : (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {joblistings.map((job) => (
            <Joblisting key={job.id} job={job} />
        ))}
     </div>
)}
       
     
      </div>
   
  </section>
  )
}

export default Joblistings