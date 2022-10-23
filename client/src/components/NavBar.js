import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
           <nav className="navbar bg-light">
            <div className="container-fluid justify-content-center my-2">
                    <a className="navbar-brand" href='/dashboard'>Fashion Store</a>
            </div>
            </nav>
        );
    }
}

export default NavBar;