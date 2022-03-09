import React from 'react'
import Navbar from '../navbar/Navbar'
import css from 'styled-jsx/css'
function Layout({children}) {
  return (
    <>
    <style jsx>
    {`
    
    .container {
            max-width: 1024px;
            margin: auto;
            padding-left: 30px;
            padding-right: 30px;
            flex: 1 0 auto;
          }
    
    
    
    
    `}



    </style>
    <Navbar/>
    <main className="container">{children}</main>
    </>
  )
}

export default Layout