import React from 'react'
// import Search from './search'
// import IconBox from './icon-box'
// import ImmutableData from './immutable-data'
// import MutableData from './mutable-data'
// import GenesisData from './genesis-data'
// import * as displayStyles from '../styles/display.module.scss'

// const SlpMutableData =
//   typeof window !== 'undefined'
//     ? require('slp-mutable-data').SlpMutableData
//     : null

// const GATEWAY = 'https://ipfs.io/ipfs/'

// const NFTs = (props) => {
class NFTs extends React.Component {

  constructor(props) {
    super(props)

    this.wallet = props.wallet
  }

  async componentDidMount() {
    await this.wallet.walletInfoPromise
    const tokenId = '1709f11fe46491b37ecccad948d69b467419c1caef5436df5f527bcc6eff9959'
    const tokenData = await this.wallet.getTokenData(tokenId)
    console.log(`tokenData: ${JSON.stringify(tokenData, null, 2)}`)

    const nfts = tokenData.genesisData.nfts

    for(let i=0; i < nfts.length; i++) {
      const thisNft = nfts[i]

      const thisNftData = await this.wallet.getTokenData(thisNft)
      console.log(`thisNftData: ${JSON.stringify(thisNftData, null, 2)}`)
    }
  }

  render() {
    return (
      <div>
        <p>test</p>
      </div>
    )
  }

}

export default NFTs
