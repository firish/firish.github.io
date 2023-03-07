import React from 'react'
import Profile from './profile'
import Footer from './Footer/footer'
import Header from './Header/Header'

import './home.css'

export default function Home() {
  return (
    <div className='home-container'>
        <Header />
        <Profile />
        <Footer />
    </div>
  )
}
