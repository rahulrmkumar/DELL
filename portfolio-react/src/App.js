import React from 'react';
import "./App.css";
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Prizing1 from './components/pricing/Prizing1';
import Contacts from './components/contact/Contacts';
import About1 from './components/about/About1';
import Blogs from './components/blog/Blogs';
import Testimonial from './components/testimonial/Testimonial';


const App = () => {
  return (
   <>
   <Sidebar/> 
   <main className='main'>
  <Home/>
    <About1/>
    <Services/>
    <Resume/>
    <Portfolio/>
    <Prizing1/>
    <Contacts/>
    <Blogs/>
    <Testimonial/>
   </main>
   </>
  )
}

export default App