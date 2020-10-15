import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    const history = useHistory();

    function handleClick(){
        history.push('/dashboard');
    }
    return (
        <div className="col-md-10 offset-md-1">
             <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="#">
                   <img style={{ height: '60px'}} src={logo} alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link mr-5" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="/">Our Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="/">Our Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="/">Contact Us</a>
                    </li>
                    <li class="nav-item">
                       <button onClick={handleClick} className="btn btn-dark">Login</button>
                    </li>
                    </ul>
                </div>
             </nav>
        </div> 
    );
};

export default Navbar;