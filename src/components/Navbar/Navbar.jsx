import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar1">
    <nav className="navbar navbar-expand-lg navbar-dark" id="navbar" style={{"background-color": "#FE2C54"}}> 
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <div className="logo-container">
                    Covid Relief
                </div>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse m-2" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item m-1 pb-1 ">
                        <a className="nav-link active" aria-current="page" href="./plasma-donors-list-page.html">
                            <span className="material-icons">bloodtype</span>
                            Plasma Donors
                        </a>
                    </li>
                    <li className="nav-item m-1 pb-1 ">
                        <a className="nav-link active" aria-current="page" href="./hospital-beds-list-page.html">
                            <span className="material-icons">local_hospital</span>
                            Hospital Beds
                        </a>
                    </li>
                    <li className="nav-item m-1 pb-1 ">
                        <a className="nav-link active" aria-current="page" href="./oxygen-suppliers-list-page.html">
                            <span className="material-icons">air</span>
                            Oxygen Suppliers
                        </a>
                    </li>
                    <li className="nav-item m-1 pb-1 ">
                        <a className="nav-link active" aria-current="page" href="./meds-injection-suppliers-list-page.html">
                            <span className="material-icons">medication</span>
                            Meds Suppliers
                        </a>
                    </li>
                    <li className="nav-item m-1 pb-1 ">
                        <a className="nav-link active" aria-current="page" href="./ambulance-providers-list-page.html">
                            <span className="material-icons">airport_shuttle</span>
                            Ambulance Providers
                        </a>
                    </li>
                    <li className="nav-item m-1 pb-1 ">
                        <a className="nav-link active" aria-current="page" href="./tiffin-service-list-page.html">
                            <span className="material-icons">takeout_dining</span>
                            Tiffin Service
                        </a>
                    </li>

                    <li className="nav-item dropdown m-1 pb-1">
                        <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="material-icons">more_vert</span>
                            More Resources
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="./all-resources-page.html" target="_parent">All Resources</a></li>
                            <li><a className="dropdown-item" href="./websites-list-page.html" target="_parent">Websites</a></li>
                            <li><a className="dropdown-item" href="./instagram-resources-list-page.html" target="_parent">Instagram</a></li>
                            <li><a className="dropdown-item" href="./twitter-resources-list-page.html" target="_parent">Twitter</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    </div>
  );
};

export default Navbar;
