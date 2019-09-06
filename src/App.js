import React from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import './styles/style.css'

class App extends React.Component{

  onSearchSubmit = (term) => {
    console.log(term)
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
