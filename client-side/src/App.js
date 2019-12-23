import React from 'react'
import axios from 'axios'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'

import './styles/style.css'

class App extends React.Component{

    constructor() {
      super()

      this.state = {
        images : null
      }
    } 

  //use async with non-arrow methods
  //async onSearchSubmit(term) (this will required to bind in constructor)
  onSearchSubmit = async term => {
    console.log(term)
    const response = await axios.get('http://localhost:9000/images', {
      params : {
        img : term
      }
    })

    this.setState({
      images : response.data
    })
    console.log((response.data))

  }

  render() {

    return (
      <div className="App">
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit}/>
        {/* Found: {this.state.images.length} images */}
        <ImageList images = {this.state.images} />
      </div>
    )
  }
  
}

export default App
