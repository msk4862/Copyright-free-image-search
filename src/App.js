import React from 'react'
import axios from 'axios'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import './styles/style.css'

class App extends React.Component{

  onSearchSubmit = (term) => {
    console.log(term)
    axios.get('https://api.unsplash.com/search/photos', {
      params : {
        query : term
      },
      headers : {
        Authorization: 'Client-ID 2b25b83960bf91b73fd95161ff78768171fdfe41c4d55ede8d0c472c0d1402eb'
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    )
  }
  
}

export default App
