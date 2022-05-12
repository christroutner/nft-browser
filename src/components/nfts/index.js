
// Global npm libraries
import React from 'react'

// Local libraries
import NFTCard from './nft-card'

const tokenId = '288c1375c8e988c02672e7ccc88dedd5c8e07f44245fb0640593ce468f57a37f'

class NFTs extends React.Component {

  constructor(props) {
    super(props)

    this.wallet = props.wallet

    this.state = {
      nftData: [],
    }
  }

  async componentDidMount() {
    await this.wallet.walletInfoPromise
    const tokenData = await this.wallet.getTokenData(tokenId)
    console.log(`Group tokenData: ${JSON.stringify(tokenData, null, 2)}`)

    const nfts = tokenData.genesisData.nfts
    const nftData = []

    for(let i=0; i < nfts.length; i++) {
      const thisNft = nfts[i]

      const thisNftData = await this.wallet.getTokenData(thisNft)
      console.log(`thisNftData ${i}: ${JSON.stringify(thisNftData, null, 2)}`)

      nftData.push(thisNftData)
    }

    this.setState({
      nftData
    })
  }

  render() {
    return (
      <div>
        <p>Loading NFTs associated with Group token{' '}
          <a
            href={`https://token.fullstack.cash/?tokenid=${tokenId}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {tokenId}
          </a>
        </p>
        {
          this.state.nftData.map((val, i) => {
            return (
              <NFTCard tokenData={val} key={val.genesisData.tokenId} />
            )
          })
        }
      </div>
    )
  }

}

export default NFTs
