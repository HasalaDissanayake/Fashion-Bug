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
                <div class="text-end p-4">
                <button type="button" className="btn btn-danger btn-md " ><Link className="text-white text-decoration-none" to="/sign-in">Logout</Link></button>
                </div>

                <div className="row row-cols-3 g-4">
                        
                <div className="col">
                        <div className="card h-100  bg-secondary bg-opacity-25" >
                        <img src="https://i.imgur.com/3jHdmkV.jpg" class="img-fluid " alt="Card image cap"></img>
                        <div className="card-body">
                        <h5 className="card-title text-dark">Men</h5>
                        <p className="card-text text-secondary">Welcome to Men Section.</p>
                        <a href="#" class="btn btn-danger"><Link className="link-light text-decoration-none" to="/dashboard/men">Explore</Link></a>
                    </div>
                    </div>
                </div>
                        
                <div className="col">
                        <div className="card h-100 bg-secondary bg-opacity-25">
                        <img src="https://i.imgur.com/9vsLQeW.jpg" class="img-fluid" alt="Card image cap"></img>
                        <div className="card-body">
                        <h5 className="card-title text-dark">Women</h5>
                        <p className="card-text text-secondary">Welcome to Women Section.</p>
                        <a href="#" class="btn btn-danger"><Link className="link-light text-decoration-none" to="/dashboard/women">Explore</Link></a>
                    </div>
                    </div>
                </div>
                        
                <div className="col">
                        <div className="card h-100 bg-secondary bg-opacity-25"> 
                        <img src="https://i.imgur.com/1jgjR07.jpg" class="img-fluid" alt="Card image cap"></img>    
                        <div className="card-body">
                        <h5 className="card-title text-dark">Kids</h5>
                        <p className="card-text text-secondary">Welcome to Kids Section.</p>
                        <a href="#" class="btn btn-danger"><Link  className="link-light text-decoration-none" to="/dashboard/kids">Explore</Link></a>
                    </div>
                    </div>
                </div>
                        
                <div className="col">
                        <div className="card h-100 bg-secondary bg-opacity-25">  
                        <img src="https://i.imgur.com/9CnxQty.jpg" class="img-fluid" alt="Card image cap"></img>  
                        <div className="card-body">
                        <h5 className="card-title text-dark">Babies</h5>
                        <p className="card-text text-secondary">Welcome to Babies Section.</p>
                        <a href="#" class="btn btn-danger"><Link className="link-light text-decoration-none" to="/dashboard/babies">Explore</Link></a>
                    </div>
                    </div>
                </div>
                        
                <div className="col">
                        <div className="card h-100 bg-secondary bg-opacity-25">
                        <img src="https://i.imgur.com/t8DQ69a.jpg" class="img-fluid" alt="Card image cap"></img>
                        <div className="card-body">
                        <h5 className="card-title text-dark">Accessories</h5>
                        <p className="card-text text-secondary">Welcome to Accessories Section.</p>
                        <a href="#" class="btn btn-danger"><Link className="link-light text-decoration-none" to="/dashboard/accessories">Explore</Link></a>
                    </div>
                    </div>
                </div>
                        
                </div>
                <br/>
                <div className='d-grid'>
                
                </div>
            
                </div>
        );
    }
}

export default Dashboard;