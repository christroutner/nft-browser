import * as React from "react"
import NFTs from '../components/nfts'
import ServerSelect from '../components/servers'

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
      <ul>
        <li>
          The code creating this page is open source. <a
            href="https://github.com/christroutner/nft-browser"
            target='_blank'
            rel='noopener noreferrer'
          >
            Check it out on GitHub
          </a>
        </li>
        <li>
          <a href="https://bafybeif4e4tuigw6yfzh7omssgqwelckoyizkklqlww5orsr37thxyjc4u.ipfs.dweb.link/"
            target='_blank'
            rel='noopener noreferrer'
          >
            This page is regularly backed up onto the Filecoin blockchain.
          </a>
        </li>
      </ul>
      <hr />
      <ServerSelect />
    </>
  )
}

export default IndexPage
