import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import OurPrograms from './components/OurPrograms/OurPrograms'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatOurParentsSay from './components/WhatOurParentsSay/WhatOurParentsSay'
import StaffSection from './components/StaffSection/StaffSection'
import BlogSection from './components/BlogSection/BlogSection'
import DonorsSection from './components/DonorsSection/DonorsSection'
import PartnershipsSection from './components/PartnershipsSection/PartnershipsSection'
import SubscribeSection from './components/SubscribeSection/SubscribeSection'
import Footer from './components/Footer/Footer'
import Announcements from './components/Announcements/Announcements'


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Announcements/>
      <OurPrograms/>
      <WhyChooseUs/>
      <StaffSection/>
      <WhatOurParentsSay/>
      <BlogSection/>
      <DonorsSection/>
      <PartnershipsSection/>
      <SubscribeSection/>
      <Footer/>
    </div>
  )
}

export default App