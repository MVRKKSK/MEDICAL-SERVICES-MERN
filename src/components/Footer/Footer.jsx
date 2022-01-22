import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
      <div className="footer">
           <div className="container-fluid">
        <div className=" foot row pt-3 pb-2">
            <div className="col-4 d-flex justify-content-around align-items-center">
                <p className="text-white">
                    &copy; 2021 &middot; Made with ❤ by Devesh, Aniket , harshit and Miryala
                </p>
            </div>

            <div className="col-4 d-flex justify-content-around">
                <a href="./terms-and-conditions-page.html" target="_parent" className="text-white">Terms & Conditions</a>
            </div>

            <div className="col-4 d-flex justify-content-around">
                <a href="#" className="text-white">Back to Top</a>
            </div>
        </div>
    </div>

      </div>
  );
};

export default Footer;
