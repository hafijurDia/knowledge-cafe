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
          <Blog></Blog>
      </div>
      
    </>
  )
}

export default App
