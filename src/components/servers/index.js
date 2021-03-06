/*
  This component contains a drop-down form that lets the user select from
  a range of Global Back End servers.
*/

// Global npm libraries
import React from 'react'
import Select from 'react-dropdown-select'

// Local libraries
const GistServers = require('../../services/gist-servers')

const defaultOptions = [
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
      options: defaultOptions
    }
  }

  async componentDidMount() {
    const servers = await this.getServers()
    // console.log('Server list retrieved from GitHub Gist.')

    this.setState({
      options: servers
    })
  }

  // This is called when the a new drop-down item is selected.
  selectServer(value) {
    if(!value) return

    console.log(`Server ${value[0].value} was selected. Reloading page...`)
    if(typeof window !== 'undefined') {
      window.location.href = `/?restURL=${value[0].value}`
    }
  }


  render() {
    return (
      <div>
        <Select options={this.state.options} onChange={(values) => this.selectServer(values)} />
        <p style={{textAlign: 'center'}}>Having trouble loading the NFTs? If NFTs don't load after a minute, then
        try selecting a different back-end server.</p>
      </div>
    )
  }

  // Retrieve an array of server URLs from the GitHub Gist.
  async getServers() {
    const gistLib = new GistServers()
    const gistServers = await gistLib.getServerList()

    const serversAry = []

    for(let i =0; i < gistServers.length; i++) {
      serversAry.push({value: gistServers[i].url, label: gistServers[i].url})
    }

    return serversAry
  }

}


export default ServerSelect
