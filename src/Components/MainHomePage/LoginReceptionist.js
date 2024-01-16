import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

function LoginReceptionist() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
   
let history=useHistory()
const [loggedIn,setloggedIn]=useState(false);

  function changeLogInData(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }
  function onLogIn() {
    console.log(loginData)
    fetch("http://localhost:8083/receptionist/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(loginData),
    })
    .then(response=> {console.log(response)
      if(response.status!=200)
      return(Promise.reject(response.text))
      return(response.json())})
    .then(response=>{
        alert("You're loggedIn  Successfully")
        setloggedIn(true)
    })
    .catch(err=>{
        alert("Invalid Username or password..")
    });
    

  }
  if(loggedIn)
  {
    history.push("/receptionist")
  }
    return (
      <div className="imr">
      <section className="vh-101 gradient-custom">
          <br/>  <br/>  <br/>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase" style={{ color: 'white' }}>Receptionist Login</h2>
                    <p className="text-white-50 mb-5" >Please enter your Email and password!</p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="form1Example13"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email"
                        name="email"
                        onChange={changeLogInData}
                        // onChange={changeLogInData}
                      />
                      <label className="form-label" for="typeEmailX"></label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                         name="password"
                        id="form1Example23"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Password"
                        onChange={changeLogInData}
                      />
                      <label className="form-label" for="typePasswordX"></label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      onClick={onLogIn}
                      // onSubmit={this.handleSubmit}
                    >
                      Sign in
                    </button>
                    <div className="divider d-flex align-items-center my-4">
                      <p className="mb-5 pb-lg-2 text-white">
                        Don't have an account?{" "}
                        <Link to="#/">Register here</Link>
                      </p>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foo">
  
  <span>Login Page !</span>
  </div>
      </section>
      </div>
    );
  }


export default LoginReceptionist

