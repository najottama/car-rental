import React from "react";
import facebook from "../assets/footer/icon_facebook.png";
import instagram from "../assets/footer/icon_instagram.png";
import mail from "../assets/footer/icon_mail.png";
import twitch from "../assets/footer/icon_twitch.png";
import twitter from "../assets/footer/icon_twitter.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="col-lg-3">
            <p className="footer" style={{ fontWeight: 700 }}>
              Jalan Suroyo No. 161 Mayangan Kota <br />
              Probolonggo 672000 <br />
              <br />
              binarcarrental@gmail.com <br />
              <br />
              081-233-334-808
            </p>
          </div>
          <div className="col-lg-3">
            <p className="footer">
              Our Services <br />
              <br />
              Why Us <br />
              <br />
              Testimonial <br />
              <br />
              FAQ
            </p>
          </div>
          <div className="col-lg-3" style={{ fontWeight: 700 }}>
            <p className="footer">
              Connect with us <br />
              <br />
              <img src={facebook} width={30} height={30} style={{ marginBottom: "20px" }} />
              <img src={instagram} width={30} height={30} style={{ marginBottom: "20px", marginLeft: "12px" }} />
              <img src={twitter} width={30} height={30} style={{ marginBottom: "20px", marginLeft: "12px" }} />
              <img src={mail} width={30} height={30} style={{ marginBottom: "20px", marginLeft: "12px" }} />
              <img src={twitch} width={30} height={30} style={{ marginBottom: "20px", marginLeft: "12px" }} />
            </p>
          </div>
          <div className="col-lg-3" style={{ fontWeight: 700 }}>
            <p className="footer">
              Copyright Binar 2022 <br />
              <br />
              <img src={logo} alt="logo" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
