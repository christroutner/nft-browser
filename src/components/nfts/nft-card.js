/*
  This component controls the display of each NFT.
*/

import React from 'react'

// Styles
const cardStyle = {
  width: "100%",
  border: '2px solid black'
}

class NFTCard extends React.Component {

  constructor(props) {
    super(props)

    this.tokenData = props.tokenData
  }


  render() {
    return (
      <div style={cardStyle}>
        <p>{this.tokenData.genesisData.name}</p>
      </div>
    )
  }

}

export default NFTCard
