import React, { Component } from 'react'
export default class Login extends Component {
   constructor(props) {
    super(props);
    
    this.state = {
      email: "",
      password: "",
    };
     this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {

    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:8000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userLogin");
        if (data.status === "ok") {
          if (email === "madmin@12") {
            alert("Login Authentication Success");
            window.location.href = "./dashboard/men";
          }
          else if (email === "wadmin@12") {
            alert("Login Authentication Success");
            window.location.href = "./dashboard/women";
          }
          else if (email === "kadmin@12") {
            alert("Login Authentication Success");
            window.location.href = "./dashboard/kids";
          }
          else if (email === "badmin@12") {
            alert("Login Authentication Success");
            window.location.href = "./dashboard/babies";
          }
          else if (email === "aadmin@12") {
            alert("Login Authentication Success");
            window.location.href = "./dashboard/accessories";
          }
          else {
            alert("Login Authentication Success");
            window.location.href = "./dashboard";
          }

        }
        else {
          alert("Login Authentication Error");
        }
        
      });
  }

  render() {
    return (
      
      <div class="card mb-3 my-5">
        <div class="row g-0 d-flex align-items-center">

          <div class="col-lg-4 d-none d-lg-flex">
            <img src="https://th.bing.com/th/id/OIP.5m1TlhtUbiNQ2Eckey-FQAHaHa?pid=ImgDet&rs=1" alt='login_image'
              class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
          </div>

          <div class="col-lg-8">
            <div class="card-body py-5 px-md-5">

              <form onSubmit={this.handleSubmit} >
                
                <div class="form-outline mb-4">
                  <label class="form-label" >Email address</label>
                  <input type="email" id="form2Example1" class="form-control" onChange={(e) => this.setState({ email: e.target.value })} />
                  
                </div>

                
                <div class="form-outline mb-4">
                  <label class="form-label" >Password</label>
                  <input type="password" id="form2Example2" class="form-control" onChange={(e)=>this.setState({password: e.target.value })} />
                  
                </div>

                
                <div class="row mb-4">
                  <div class="col d-flex ">

                <div class="form-check justify-content-left">
                  <input class="form-check-input bg-danger border border-danger" type="checkbox" value="" id="form2Example31" checked />
                  <label class="form-check-label " for="form2Example31"> Remember me </label>
                </div>
                    
                <div class="form-check justify-content-right px-5">
                    <p className="forgot-password text-right">
                      New user, <a href="sign-up" className="text-decoration-none text-danger">Sign up?</a>
                    </p>
                </div>
                </div>

                </div>

              
                <button type="submit" class="btn btn-primary bg-danger border border-danger">Sign In</button>

              </form>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
