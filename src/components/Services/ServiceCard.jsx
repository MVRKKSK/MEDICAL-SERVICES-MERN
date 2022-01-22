import React from 'react';

import './ServiceCard.css'

const ServiceCard = () => {
  return (
      <div className="servicecard">
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 align-items-stretch py-5">
            <div className="col p-2">
                <div className="card1 card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="text-center mt-5 mb-4 display-6 lh-1 fw-bold">Plasma Donors</h2>
                        <a className="btn btn-primary btn-lg px-4 mt-2 mb-5" href="./plasma-donors-list-page.html" target="_parent" role="button">
                            View Full List
                        </a>
                    </div>
                </div>
            </div>

            <div className="col p-2">
                <div className="card2 card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="text-center mt-5 mb-4 display-6 lh-1 fw-bold">Hospital Beds</h2>
                        <a className="btn btn-secondary btn-lg px-4 mt-2 mb-5" href="./hospital-beds-list-page.html" target="_parent" role="button">
                            View Full List
                        </a>
                    </div>
                </div>
            </div>

            <div className="col p-2">
                <div className="card3 card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="text-center mt-5 mb-4 display-6 lh-1 fw-bold">Oxygen Suppliers</h2>
                        <a className="btn btn-info btn-lg px-4 mt-2 mb-5" href="./oxygen-suppliers-list-page.html" target="_parent" role="button">
                            View Full List
                        </a>
                    </div>
                </div>
            </div>

            <div className="col p-2">
                <div className="card4 card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="text-center mt-5 mb-4 display-6 lh-1 fw-bold">Meds Suppliers</h2>
                        <a className="btn btn-success btn-lg px-4 mt-2 mb-5" href="meds-injection-suppliers-list-page.html" target="_parent" role="button">
                            View Full List
                        </a>
                    </div>
                </div>
            </div>

            <div className="col p-2">
                <div className="card5 card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                      
                        <h2 className="text-center mt-5 mb-4 display-6 lh-1 fw-bold">EMS Providers</h2>
                        <a className="btn btn-danger btn-lg px-4 mt-2 mb-5" href="ambulance-providers-list-page.html" target="_parent" role="button">
                            View Full List
                        </a>
                    </div>
                </div>
            </div>

            {/* <div className="col p-2">
                <div className="card6 card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="text-center mt-5 mb-4 display-6 lh-1 fw-bold">Tiffin Service</h2>
                        <a className="btn btn-warning btn-lg px-4 mt-2 mb-5" href="tiffin-service-list-page.html" target="_parent" role="button">
                            View Full List
                        </a>
                    </div>
                </div>
            </div> */}
        </div>
     

  );
};

export default ServiceCard;
