import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../pages/pages.css";
import Filter from "../components/Filter";
import Hero from "../components/Hero";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
        console.log(res);
        setCar(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Filter disabled={true} isButton={false} />
      {Object.entries(car).length ? (
        <div className="car-box">
          <div className="row justify-content-center">
            <div className="col-md-4 paket border p-5">
              <p className="fw-bold">Tentang Paket</p>
              <p className="fw-bold">Include</p>
              <ul>
                <li className="text-black-50">Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                <li className="text-black-50">Sudah termasuk bensin selama 12 jam </li>
                <li className="text-black-50">Sudah termasuk Tiket Wisata </li>
                <li className="text-black-50">Sudah termasuk pajak</li>
              </ul>
              <p className="fw-bold">Exclude</p>
              <ul>
                <li className="text-black-50">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li className="text-black-50">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li className="text-black-50">Tidak termasuk akomodasi penginapan</li>
              </ul>
              <p className="fw-bold">Refund, Reschedule, Overtime</p>
              <ul>
                <li className="text-black-50">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li className="text-black-50">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li className="text-black-50">Tidak termasuk akomodasi penginapan</li>
                <li className="text-black-50">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li className="text-black-50">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li className="text-black-50">Tidak termasuk akomodasi penginapan</li>
                <li className="text-black-50">Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                <li className="text-black-50">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam </li>
                <li className="text-black-50">Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>
            <div className="col-md-4 border p-5 ms-2">
              <img className="car-detail" src={car.image} />
              <h1 className="text-center fw-bold fs-1">{car.name}</h1>
              <div className="row">
                <div className="col">
                  <p className="fw-bold mt-5">Total {car.price}</p>
                </div>
              </div>
              <p className="text-center fw-bold fs-5">
                {car.category === "Medium" && "4 - 6 Orang"}
                {car.category === "small" && "2 - 4 Orang"}
                {car.category === "medium" && "4 - 6 Orang"}
                {car.category === "large" && "6 - 8 Orang"}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h1></h1>
      )}
      <Footer />
    </div>
  );
};

export default CarDetail;
