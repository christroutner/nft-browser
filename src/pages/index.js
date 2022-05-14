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

      <hr />
      <p>
        The code creating this page is open source. <a
          href="https://github.com/christroutner/nft-browser"
          target='_blank'
          rel='noopener noreferrer'
        >
          Check it out on GitHub
        </a>
      </p>
    </>
  )
}

export default IndexPage
