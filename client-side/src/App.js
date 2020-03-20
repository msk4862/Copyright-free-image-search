import React from 'react'
import axios from 'axios'

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import Footer from './components/Footer'

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

    const response = await axios.get('http://nciserver-env.m2ecpqkmqs.ap-south-1.elasticbeanstalk.com/images', {
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
