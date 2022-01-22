import React from 'react';

const InfoCard = ({title,content,btninfo,image}) => {
  return (
      <div className="infocard">
    <div className="container-fluid bg-light p-5">
        <div className="container">
            <div className="row contact-section" id="contact-section">
                <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12">
                    <h2 className="mb-4 display-6 lh-1 fw-bold">
                        {title}
                    </h2>
                    <p className="lead">
                        {content}
                    </p>
                    <a className="btn btn-primary btn-lg px-4 mt-2 mb-5" href="./add-plasma-donor-contact-page.html" role="button">
                        {btninfo}
                    </a>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
                    <img src={image} className="contact-section-image shadow-lg rounded img-fluid mx-auto d-none d-sm-none d-md-block d-lg-block d-xl-block" alt="Add Details about Plasma Donor" width="500" height="500" />
                </div>
            </div>
        </div>
    </div>
      </div>
  );
};

export default InfoCard;
