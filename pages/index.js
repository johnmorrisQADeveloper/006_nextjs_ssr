import React from 'react'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Prices from '../components/Prices'


const index = (props) => {
  return (
    <Layout>
      <div>
        <h1>Welcome to BitzPrice</h1>
        <p>Check current bitcoin rate</p>
        <Prices bpi={props.bpi}/>
      </div>
    </Layout>
  )
}

index.getInitialProps = async function () {
  const res  = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const data = await res.json()
  return {bpi: data}

}

export default index
