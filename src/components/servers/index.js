/*
  This component contains a drop-down form that lets the user select from
  a range of Global Back End servers.

  <label>Choose a car:{' '}
    <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
    </select>
  </label>
  <br />
*/


// Global npm libraries
import React from 'react'
// import AsyncSelect from 'react-select/async'
import Select from 'react-dropdown-select'

// Local libraries
// import NFTCard from './nft-card'

const options = [
  { value: 'https://free-bch.fullstack.cash', label: 'https://free-bch.fullstack.cash' },
  { value: 'https://bc01-ca-bch-consumer.fullstackcash.nl', label: 'https://bc01-ca-bch-consumer.fullstackcash.nl' },
  { value: 'https://pdx01-usa-bch-consumer.fullstackcash.nl', label: 'https://pdx01-usa-bch-consumer.fullstackcash.nl' },
  { value: 'https://wa-usa-bch-consumer.fullstackcash.nl', label: 'https://wa-usa-bch-consumer.fullstackcash.nl' }
]

class ServerSelect extends React.Component {

  constructor(props) {
    super(props)

    // this.wallet = props.wallet

    this.state = {
      // nftData: [],
    }
  }

  // async componentDidMount() {
  //
  // }

  // async getServers() {
  //   console.log('hello world')
  //   return 'a'
  // }

  selectServer(value) {
    console.log(`Server ${value[0].value} was selected. Reloading page...`)
    if(typeof window !== 'undefined') {
      window.location.href = `/?restURL=${value[0].value}`
    }
  }


  render() {
    return (
      <div>
        <Select options={options} onChange={(values) => this.selectServer(values)} />
        <p style={{textAlign: 'center'}}>Having trouble loading the NFTs? If NFTs don't load after a minute, then
        try selecting a different back-end server.</p>
      </div>
    )
  }

}

const getServers = async (input) => {
  console.log('hello world')
  return 'a'
}

export default ServerSelect
