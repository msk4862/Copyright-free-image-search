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
        images : []
      }
    } 

  //use async with non-arrow methods
  //async onSearchSubmit(term) (this will required to bind in constructor)
  onSearchSubmit = async term => {
    console.log(term)
    // const response = await axios.get('https://api.unsplash.com/search/photos', {
    //   params : {
    //     query : term
    //   },
    //   headers : {
    //     Authorization: 'Client-ID 2b25b83960bf91b73fd95161ff78768171fdfe41c4d55ede8d0c472c0d1402eb'
    //   }
    // })

    // this.setState({
    //   images : response.data.results
    // })
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
