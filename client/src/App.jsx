import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import './App.css'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Feedback from './Feedback'
import Internship_Categories from './Internship_Categories'
import Dashboard from './Dashboard'
import Online_Internship_Feedback from './Online_Internship_Feedback'
import Product_Categories from './Product_Categories'
import Product_Feedback from './Product_Feedback'
import Services_Categories from './Services_Categories'
import Services_Feedback from './Services_Feedback'
import FeedbackAnalytics from './FeedbackAnalytics'
import HelpSupport from './HelpSupport'
import Settings from './Settings'
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/analytics' element={<FeedbackAnalytics/>}></Route>
        <Route path='/help-support' element={<HelpSupport/>}></Route>
        <Route path='/settings' element={<Settings/>}></Route>
        <Route path='/feedback-submission' element={<Feedback/>}></Route>
        <Route path='/Internship_Categories' element={<Internship_Categories/>}></Route>
        <Route path='/Internshipfeedback' element={<Online_Internship_Feedback />} />
        <Route path='/Product_Categories' element={<Product_Categories/>}></Route>
        <Route path='/productfeedback' element={<Product_Feedback />} />
        <Route path='/Services_Categories' element={<Services_Categories/>}></Route>
        <Route path='/servicesfeedback' element={<Services_Feedback />} />

    </Routes>
    </BrowserRouter>
  )
}
export default App;
