import axios from 'axios';
import React, { Component, } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Login.css'



export class Login extends Component {
  handleSubmit=e=>{
      e.preventDefault();
     

      const data={
          email:this.email,
          password: this.password
      }

      axios.post("http://localhost:8081/auth",data)
      .then(res=>{
          // alert('Your Logged In')
          sessionStorage.setItem('token',res.data.token)
          console.log(res)
          this.props.history.push(`/owner`);
          window.location.reload()
          
        
          
      })
      .catch(err=>{
          alert('Your userID or password is Incorrect')
          console.log(err)

      })
  }
  render() {
      return (
          <div className='img'>
                   
          <section >
              <form onSubmit={this.handleSubmit}>
              <br/>    <br/>    <br/>    <br/>    <br/>    <br/>
              <div className='co'>
                  <h1 style={{fontFamily:"monospace",textAlign:"center"}}>User Login</h1>
                  <div className="log">
                     
                      {/* <img src={email} style={{height:20}}/>&nbsp;&nbsp; */}
                      <input type="email" name="email"  placeholder="Enter Email" onChange={e=>this.email=e.target.value}/>
                      
                  </div><br/>

                  <div className="log">
                      
                      {/* <img src={pass} style={{height:20}}/>&nbsp;&nbsp; */}
                      <input type="password" name="password" placeholder="Enter password" onChange={e=> this.password=e.target.value}/>
                      
                  </div><br/>

                  
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="bt" onClick={()=>{}} type="submit" style={{width:150,}}>Login</button>&nbsp;&nbsp;
                  <br/>
                  <p style={{color: 'dark',margin:'10px'}}>Don't have an account? <Link to="/sign-up" className="fw-bold text-body" ><u style={{color: 'dark'}}>Register here</u></Link></p>
                  
              </div>
              </form>
             
          {/* </div> */}
          </section>
          <br/>  <br/>  <br/>
          <div className="foo">
  
               <span>Login Page !</span>
               </div>
          </div>
      )
  }
}
export default Login