import React from 'react'

import '../styles/SearchBar.css'

class SearchBar extends React.Component {
    constructor() {
        super()

        this.state = {
            serachTerm : ''
        }
        
        //NO need to bind while using ARROW METHODS
        //this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            serachTerm : event.target.value
        }) 
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.serachTerm)
    }

    render () {
        return (
            <div className='d-flex flex-column search-bar'>
                <div className='d-flex justify-content-center row disc mt-auto'>
                    <div className='col-10 col-sm-8 flex-column'>
                        <p>Stunning and copyright free images</p>
                        <p>Tired of searching images from diffrent websites? Try using NCI which 
                            searches copyright free images from across the platforms 
                            like pixabay, unsplash, etc. and shows you the results in a single platform.
                        </p>
                    </div>
                </div>
                
                <form className='d-flex justify-content-center row mb-auto' onSubmit={this.handleSubmit}> 
                    <div className='col-12 col-sm-8'>
                        <input className='col-10 col-sm-6 form-input' type='text' placeholder='Search...'
                             name='search'
                             value={this.state.serachTerm}
                             onChange={this.handleChange}/>
                        <i className='search icon'></i>
                    </div>
                </form>
            </div>
    
        )
    }

}

export default SearchBar