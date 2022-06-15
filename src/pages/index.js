import * as React from "react"
import NFTs from '../components/nfts'
import ServerSelect from '../components/servers'
import { useQueryParam, StringParam } from 'use-query-params'

let wallet = {}
let BchWallet
if(typeof window !== 'undefined') {
  BchWallet = window.SlpWallet
  const options = { interface: 'consumer-api' }
  wallet = new BchWallet(null, options)
}


// markup
const IndexPage = (props) => {
  // Detect different server passed as a query parameter.
  // If a server is specified, reinstantiate the wallet and override the default
  // server.
  const [restURL] = useQueryParam('restURL', StringParam)
  console.log('restURL: ', restURL)
  if(restURL) {
    const options = {
      interface: 'consumer-api',
      restURL
    }
    wallet = new BchWallet(null, options)
  }

  return (
    <>
      <NFTs wallet={wallet} />

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
