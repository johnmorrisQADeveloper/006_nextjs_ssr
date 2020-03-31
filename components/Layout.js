import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>BitzPrice</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/cerulean/bootstrap.min.css"></link>
      </Head>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
