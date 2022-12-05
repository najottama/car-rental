import React from "react";
import complete from "../assets/why-us/icon_complete.png";
import price from "../assets/why-us/icon_price.png";
import clock from "../assets/why-us/icon_24hrs.png";
import professional from "../assets/why-us/icon_professional.png";

const WhyUs = () => {
  return (
    <section id="why-us">
      <div className="container pb-2 pt-5">
        <h1 className="fs-1 fw-bold">Why Us</h1>
        <p className="fs-6 fw-bold">Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <img src={complete} width={32} height={32} className="icon" />
                <h5 className="card-title">Mobil Lengkap</h5>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <img src={price} width={32} height={32} className="icon" />
                <h5 className="card-title">Harga Murah</h5>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <img src={clock} width={32} height={32} className="icon" />
                <h5 className="card-title">Layanan 24 Jam</h5>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. kami juga tersedia di hari minggu
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <img src={professional} width={32} height={32} className="icon" />
                <h5 className="card-title">Sopir Profesional</h5>
                Sopir yang Profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
