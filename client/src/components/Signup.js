import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();

    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:8000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("sign-up successful");
        console.log(data, "userRegister");
         window.location.href = "./sign-in";
      });
  }

  render() {
    return (    
      <section class="text-center ">

        <div class="card mx-4 mx-md-5  shadow-lg p-1  bg-white rounded">
          <div class="card-body  px-md-5">

            <div class="row d-flex justify-content-center bg-body">
              <div class="col-lg-8">
                <h2 class="fw-bold mb-5">Sign up now</h2>
                <form onSubmit={this.handleSubmit}>
                
                  <div class="row">
                    <div class="col-md-6 mb-2">
                      <div class="form-outline">
                      <label class="form-label" >First name</label>
                        <input type="text" id="form3Example1" class="form-control" onChange={(e)=>this.setState({fname: e.target.value })} />
                      </div>
                    </div>
                    <div class="col-md-6 mb-2">
                      <div class="form-outline">
                      <label class="form-label" >Last name</label>
                        <input type="text" id="form3Example2" class="form-control"  onChange={(e)=>this.setState({lname: e.target.value })} />
                      </div>
                    </div>
                  </div>

                
                  <div class="form-outline mb-2">
                  <label class="form-label" >Email address</label>
                    <input type="email" id="form3Example3" class="form-control" onChange={(e)=>this.setState({email: e.target.value })} />
                  </div>

                  
                  <div class="form-outline mb-2 ">
                  <label class="form-label " >Password</label>
                    <input type="password" id="form3Example4" class="form-control" onChange={(e)=>this.setState({password: e.target.value })}/>
                  </div>

                
                  <div class="form-check d-flex justify-content-center mb-4">
                    <input class="form-check-input me-2 border border-danger bg-danger" type="checkbox" value="" id="form2Example33" checked />
                    <label class="form-check-label" >
                      Subscribe to our newsletter
                    </label>
                  </div>

                  <button type="submit" class="btn btn-primary btn-block mb-4 bg-danger border border-danger"onClick={"/sign-in"} >
                    Sign up
                  </button>

                  <div class="text-center">
                    <p>or sign up with:</p>
                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-facebook-f" style={{color: 'red'}}></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-google" style={{color: 'red'}}></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-twitter " style={{color: 'red'}} aria-hidden="true"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-github " style={{color: 'red'}}></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}