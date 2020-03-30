import React from 'react'

import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import Pagination from './components/Pagination'
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
        currentPage: 1,
        imagesPerPage: 25,

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

  //Change page number
  paginate = (pageNumber) => {
    this.setState ({
      currentPage: pageNumber
    })
  }


  render() {

    let currentImages = null
    let totalImages = 0
    if (this.state.images) {
       //Get current posts
      const indexOfLastImage = this.state.currentPage*this.state.imagesPerPage
      const indexOfFirstImage = indexOfLastImage - this.state.imagesPerPage

      currentImages = this.state.images.slice(indexOfFirstImage, indexOfLastImage)

      totalImages = this.state.images.length
    }

    return (
      <div className="d-flex flex-column App">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images = {currentImages} loading={this.state.loading} error={this.state.error}/>
        <Pagination 
            totalImages={totalImages} 
            imagesPerPage={this.state.imagesPerPage}
            currentPage={this.state.currentPage}
            paginate={this.paginate}   
          />
        <Footer/>
      </div>
    )
  }
  
}

export default App
