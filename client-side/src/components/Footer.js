import React from 'react'

import '../styles/Footer.css'

function Footer() {
    return (
            <footer className='page-footer'>
                <div className='container-fluid'>
                    <div className='row social justify-content-center'>
                        <div className='col-12 col-sm-6'>
                            <a href="https://www.linkedin.com/in/msk4862" target="blank">
                            <i className="fab fa-linkedin fa-2x"></i></a>
                            <a href="https://github.com/msk4862" target="blank">
                            <i className="fab fa-github fa-2x"></i></a>
                            <a href="https://www.facebook.com/md.shoaib.4862" target="blank">
                            <i className="fab fa-facebook fa-2x"></i></a>
                            <a href="https://twitter.com/msk4862" target="blank">
                            <i className="fab fa-twitter fa-2x"></i></a>
                        </div>
                    </div>
                    <div className="row copyright justify-content-center">
                        <p className='col-12 col-sm-6'>Copyright &#x24B8; 2020 NCI.</p>
                    </div>
                </div>
            </footer>
    )
}

export default Footer