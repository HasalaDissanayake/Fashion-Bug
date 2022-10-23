import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

    componentDidMount() {
        fetch("http://localhost:8000/dashboard-user", {
            method: "GET",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        })
        .then(() => {
            console.log("userDashboard");
        });
    }

    render() {
        return (
            <div className='dashboard-inner'>
                
                <div className="row row-cols-3 g-4">
                        
                <div className="col">
                        <div className="card h-100">
                        {/* <img class="card-img-top" src="../logo.svg" alt="Card image cap"></img> */}
                        <div className="card-body">
                        <h5 className="card-title"><Link className="link-success text-decoration-none" to="/dashboard/men">Men</Link></h5>
                        <p className="card-text">Welcome to Men Section.</p>
                    </div>
                    </div>
                </div>
                        
                <div className="col">
                        <div className="card h-100">
                        <div className="card-body">
                        <h5 className="card-title"><Link className="link-success text-decoration-none" to="/dashboard/women">Women</Link></h5>
                        <p className="card-text">Welcome to Women Section.</p>
                    </div>
                    </div>
                </div>
                        
                <div className="col">
                        <div className="card h-100">     
                        <div className="card-body">
                        <h5 className="card-title"><Link  className="link-success text-decoration-none" to="/dashboard/kids">Kids</Link></h5>
                        <p className="card-text">Welcome to Kids Section.</p>
                    </div>
                    </div>
                </div>
                        
                <div className="col">
                        <div className="card h-100">    
                        <div className="card-body">
                        <h5 className="card-title"><Link className="link-success text-decoration-none" to="/dashboard/babies">Babies</Link></h5>
                        <p className="card-text">Welcome to Babies Section.</p>
                    </div>
                    </div>
                </div>
                        
                <div className="col">
                        <div className="card h-100">
                        <div className="card-body">
                        <h5 className="card-title"><Link className="link-success text-decoration-none" to="/dashboard/accessories">Accessories</Link></h5>
                        <p className="card-text">Welcome to Accessories Section.</p>
                    </div>
                    </div>
                </div>
                        
                </div>
                <br/>
                <div className='d-grid'>
                <button type="button" className="btn btn-danger" ><Link className="text-white text-decoration-none" to="/sign-in">Logout</Link></button>
                </div>
                </div>
        );
    }
}

export default Dashboard;