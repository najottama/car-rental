import React from "react";
import { Link } from "react-router-dom";
import mobil from "../assets/img_car.png";

const Hero = (props) => {
  return (
    <div>
      <section className="hero">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-6 py-4">
              <h1 className="display-4">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="desc">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              {props.isButtonShow ? (
                <div>
                  <button type="button" className="btn btn-success">
                    <Link to="/carimobil" style={{ textDecoration: "none", color: "#fff" }}>
                      Mulai Sewa Mobil
                    </Link>
                  </button>
                </div>
              ) : null}
            </div>
            <div className="col-lg-6 p-0 m-0 text-end">
              <img src={mobil} alt="car" className=" img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
