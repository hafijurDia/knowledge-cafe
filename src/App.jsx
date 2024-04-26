import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <div>
        <Header></Header>
        <main>
          <div className='blog-content'>
          <Blog></Blog>
          </div>
          <div className='sidebar'>
          <Sidebar></Sidebar>
          </div>
          
        </main>
      </div>
      
    </>
  )
}

export default App
