import React from 'react'

import Header from './components/Header'
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
      loading: true
    })

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

  render() {

    return (
      <div className="d-flex flex-column App">
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images = {this.state.images} loading={this.state.loading}/>
        <Footer/>
      </div>
    )
  }
  
}

export default App
