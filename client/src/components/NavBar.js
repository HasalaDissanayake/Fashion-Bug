import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
                <nav class="navbar navbar-expand-lg navbar-light bg-white">

                <div class="container-fluid">
  
                    <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
                    <a class="navbar-brand mt-2 mt-lg-0" href="http://localhost:3000/dashboard">
                        <img
                        src="https://i.imgur.com/iKRjAqQ.png"
                        height="120"
                        alt="MDB Logo"
                        loading="lazy"
                        />
                    </a>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link" href="http://localhost:3000/dashboard">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
                
                </nav>

        );
    }
}

export default NavBar;