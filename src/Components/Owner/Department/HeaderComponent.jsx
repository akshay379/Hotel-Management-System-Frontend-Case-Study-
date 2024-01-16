import React, { Component } from 'react'
import "./HeaderComponent.css";
import {Link} from "react-router-dom";

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md '>
                     
                           
                           <Link to="/" className='navbar-brand'>Hotel Management System</Link>
                          
                           <div className="navbar-nav ">
                                <Link className="nav-item nav-link " to="/owner">Owner</Link>
                                <Link className="nav-item nav-link" to="#">Manager</Link>
                                <Link className="nav-item nav-link" to="#">Receptionist</Link>
                                <Link className="nav-item nav-link" to="/login">Login</Link>
                            </div>
                           
                        
                    </nav>
                </header>
            </div>
        )
    }
}
