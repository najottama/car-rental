import React from "react";

const Faq = () => {
  return (
    <section id="faq">
      <div className="container" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <h1 className="fs-2">Frequently Asked Question</h1>
            <p style={{ marginTop: "25px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>{" "}
            <br />
            <br />
          </div>
          <div className="col-lg-6 col-xs-12">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sequi.</div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, ex?</div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, nostrum.</div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, alias.</div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Bagaimana jika terjadi kecelakaan
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, omnis.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
