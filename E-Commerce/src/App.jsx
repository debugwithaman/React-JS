import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TopProducts from './components/TopProducts'
import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <TopProducts/>
      <div className='flex flex-col w-full lg:w-[80%] m-auto'>
        <FeatureSection title="Why Choose Us ?" description="We make online shopping simple,safe, and rewarding with premium product fast delivery and customer first service" ctaTitle="Learn More" srcImg="/assests/first-feature.png"/>

        <FeatureSection classNames='flex-row-reverse' title="Shop by category" description=" Find everything you need in just a few clicks from fashion and electronics to home essentials" ctaTitle="Browse Categories" srcImg="/assests/second.png"/>

        <FeatureSection title="Trending Right Now" description=" Discover what's hot shop the product everyone is living today" ctaTitle="View Best Sellers" srcImg="/assests/third.png"/>

        <FeatureSection classNames='flex-row-reverse' title="Limited time Deals" description=" Grab exclusive discounts on special offers before they are gone" ctaTitle="Shop Deals" srcImg="/assests/four.png"/>

        <FeatureSection title="Loved By thousands" description=" Amazing expression the delivery was quick and the product quality exceeded expectations" ctaTitle="Shop Now" srcImg="/assests/five.png"/>
        
      </div>
      <Footer/>
      
    </div>
  )
}

export default App