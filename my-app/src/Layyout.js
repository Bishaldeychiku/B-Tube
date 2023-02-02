import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screen/HomeScreen/HomeScreen'

export default function Layyout() {
    
  const[sidebar,toggleSidebar]=useState(false)

  const handelSidebar=()=>toggleSidebar(value => !value)
  return (
    <div>
        <Header handelSidebar={handelSidebar}/>
      <div className='app_container  '>
        <Sidebar sidebar={sidebar} handelSidebar={handelSidebar}/>
        <Container fluid className='app__min '>
          <HomeScreen />
        </Container>
      </div>
    </div>
  )
}
