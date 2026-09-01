import React from 'react'

function Header() {
    return (
        <header id='hdr'>
            <div className="container-fluid">
                <a className='murec-logo' href=""><img src="/images/murec.webp" alt="" /></a>
                <button className="hamburger" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default Header
