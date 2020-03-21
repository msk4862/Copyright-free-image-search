import React from 'react'

import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import Footer from './components/Footer'

import API from './apis/imageAPI'
import './styles/style.css'

class App extends React.Component{

    constructor() {
      super()

      this.state = {
        images : null,
        loading: false,
        error: false,
      }
    } 

  componentDidMount() {
    var DEFAULT = 'forests'
    this.onSearchSubmit(DEFAULT)
  }
  //use async with non-arrow methods
  //async onSearchSubmit(term) (this will required to bind in constructor)
  onSearchSubmit = async term => {
    console.log(term)
    this.setState ({
      error: false,
      loading: true
    })


    try {
        const response = await API.get('images/', {
        params : {
          img : term
        }
      })

      this.setState({
        loading:false,
        images : response.data
      })
    }
    catch (error) {
      this.setState({
        loading:false,
        error: true,
      })
    }
  }
  

  render() {

    return (
      <div className="d-flex flex-column App">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images = {this.state.images} loading={this.state.loading} error={this.state.error}/>
        <Footer/>
      </div>
    )
  }
  
}

export default App
