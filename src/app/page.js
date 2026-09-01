import Header from '@/components/layout/Header'
import Associations from '@/components/sections/Associations'
import Banner from '@/components/sections/Banner'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import Partners from '@/components/sections/Partners'
import VideoContentSection from '@/components/sections/VideoContentSection'
import { videoSections } from '@/data/videoSections'
import React from 'react'

function Home() {
  const arr = [1, 2, 3];
  return (
    <>
      <Header />
      <Banner />
      {videoSections.map((e) => (
        <VideoContentSection
          key={e.id}
          {...e}
        />
      ))}
     <Associations/>
     <Partners/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home