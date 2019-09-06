import React from 'react'

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
            <div className='search-bar'>
                <form className='ui form' onSubmit={this.handleSubmit}> 
                    <div className='ui icon input'>
                        <input type='text' placeholder='Search...'
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