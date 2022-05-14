import * as React from "react"
import NFTs from '../components/nfts'

let wallet = {}
if(typeof window !== 'undefined') {
  const BchWallet = window.SlpWallet
  const options = { interface: 'consumer-api' }
  wallet = new BchWallet(null, options)
}


// markup
const IndexPage = (props) => {
  return (
    <>
      <NFTs wallet={wallet}/>
    </>
  )
}

export default IndexPage
