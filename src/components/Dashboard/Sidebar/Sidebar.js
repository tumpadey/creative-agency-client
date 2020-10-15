import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faHome, faGripHorizontal,  } from '@fortawesome/free-solid-svg-icons';

import './Sidebar.css';
import logo from '../../../images/logos/logo.png';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="sidebar d-flex flex-column justify-content-between" style={{ height: "100vh" }}>

        <ul className="list">
            <a class="navbar-brand m-4 mt-5 " href="/dashboard"><img src={logo} alt="" style={{ height: '50px' }} /></a>

            <li>
                <Link to="/orderForm" >
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order</span>
                </Link>
            </li>
            <li>
                <Link to="/serviceList" >
                    <FontAwesomeIcon icon={faHome} /> <span>Service List</span>
                </Link>
            </li>
            <li>
                <Link to="postReview" >
                    <FontAwesomeIcon icon={faHome} /> <span>Review</span>
                </Link>
            </li>
            <li>
                    <Link to="admin" >
                        <FontAwesomeIcon icon={faHome} /> <span>Service Status</span>
                    </Link>
                </li>
                <li>
                    <Link to="addService" >
                        <FontAwesomeIcon icon={faHome} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="makeAdmin" >
                        <FontAwesomeIcon icon={faHome} /> <span>Make Admin</span>
                    </Link>
                </li>
            </ul>
             <div className="text-center my-5"> 
                <Link to="/" className="btn btn-dark"> <span>Logout</span></Link>
             </div>
       
    </div>
    );
};

export default Sidebar;