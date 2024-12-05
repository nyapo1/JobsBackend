import React from 'react';
import { Route ,createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Mainlayout from './layouts/Mainlayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage , { jobLoader } from './Pages/JobPage';
import Addjobpage from './Pages/Addjobpage';
import EditJobPage from './Pages/EditJobPage';






const App = () => {

  // ADD  JOBS
  const addJob = async (newJob) => {
    try {
      const res = await fetch('api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob),
      });
  
      if (!res.ok) {
        throw new Error('Failed to add job'); // Error handling for non-200 responses
      }
  
      const data = await res.json(); // Assuming the server returns JSON
      return data; // Return the response data
    } catch (error) {
      console.error('Error:', error); // Log any errors
      return null; // Or handle the error as needed
    }
  };


  // DELETE JOBS

  const deleteJob = async (id) => {
    const response = await fetch(`/api/jobs/${id}`, { // Ensure the leading slash is present
      method: 'DELETE'
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete job'); // Handle error if needed
    }
  
    return;
  };
    // Update Job
    const updateJob = async (job) => {
      const res = await fetch(`/api/jobs/${job.id}`, { // Added leading slash
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });
      // ... existing code ...
  }

  const router=createBrowserRouter(
    createRoutesFromElements(
    <Route  path='/' element={<Mainlayout/>}>
      <Route index  element={<HomePage/>}/>
      <Route path='/jobs'  element={<JobsPage/>}/>
      <Route path='/jobs/:id'  element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
      <Route path='/edit-job/:id' 
       element={<EditJobPage updateJobSubmit={updateJob} />} 
       loader={jobLoader}/>
      <Route path='/*'  element={<NotFoundPage/>}/>
      <Route path='/add-job'  element={<Addjobpage addJobSubmit={addJob}/>}   />
      

    </Route>
  )
  )
  return <RouterProvider router={router}/>
};

export default App;