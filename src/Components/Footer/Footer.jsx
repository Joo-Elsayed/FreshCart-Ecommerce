import React from "react";
// import Style from './Footer.module'
// import img1 from '../../Assets/Images/amazon-pay'
import img2 from '../../Assets/Images/american-express.png'
// import img3 from '../../Assets/Images/app-store-png-logo-33115.png'
import img4 from '../../Assets/Images//card.png'
import img5 from '../../Assets/Images/paypal.png'
import img6 from '../../Assets/Images//logoC.png'

 export default function Footer() {
  return (
    <>
      <div className="bg-light py-5 mt-3">
        <div className="container">
          <div className="row">
            <h3 className="text-start">Get the FreshCart app</h3>
            <p className="h6 text-start mb-3">
              We will send you a link, open it on your phone to download the
              app.
            </p>
            <form className="row">
              <div className="col-md-10">
                <label htmlFor="inputPassword2" className="visually-hidden">
                  Password
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-2 text-end">
                <button
                  type="submit"
                  className="btn mb-3 bg-main text-white appBtn"
                >
                  share App Link
                </button>
              </div>
            </form>
            <div className="col-12">
              <div className="border-top border-bottom py-4 mt-3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="align-items-center col-md-12">
                      Payment Partner |
                      <div className="footerPaymnet">

                        <img
                          className="mx-1 object-fit-contain"
                          width={40}
                          height={40}
                          src={img2}
                          alt="footer-2"
                        />

                        <img
                          className="mx-1 object-fit-contain"
                          width={40}
                          height={40}
                          src={img4}
                          alt="footer-4"
                        />

                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 appSection mt-2">
                    Get deliveries with FreshCart{" "}
                    <img
                      width={200}
                      height={60}
                      className="object-fit-contain"
                      src={img5}
                      alt="footer-5"
                    />

                      <img
                      width={100}
                      height={20}
                      className="object-fit-contain"
                      src={img6}
                      alt="footer-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}