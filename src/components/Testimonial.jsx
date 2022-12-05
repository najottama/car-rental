import React from "react";
import testi from "../assets/testi.png";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OurServices = () => {
  return (
    <section id="testimoni">
      {/* owl carousel */}
      <div className="row text-center fw-bold mt-5 mb-5">
        <div className="col">
          <h2 className="fs-3 fw-bold pb-2">Testimonial</h2>
          <p className="fs-6 pb-4">Berbagai review positif dari para pelanggan kami</p>
        </div>
        <OwlCarousel className="owl-theme" loop margin={50} nav>
          <div class="item">
            <img src={testi} alt="testi" />
          </div>
          <div class="item">
            <img src={testi} alt="testi" />
          </div>
          <div class="item">
            <img src={testi} alt="testi" />
          </div>
          <div class="item">
            <img src={testi} alt="testi" />
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default OurServices;
