import "../../../assets/css/productsale.css";
import "../../../assets/js/productsale.js";
import CountDown from "../../../layouts/frontend/CountDown.js";

function ProductSale(props) {
    return (
        <section className="my-5 mx-2 p-3 rounded-3" style={{ backgroundColor: `#F99417` }}>
            <div className="row">
                <div className="d-flex">
                    <h3 className="fw-bold">SẢN PHẨM SALE</h3>
                    <CountDown />
                </div>

                <div id="myCarousel" className="carousel slide container" data-bs-ride="carousel">
                    <div className="carousel-inner w-100">
                        <div className="carousel-item active">
                            <div className="col-md-3">
                                <div className="card card-body">
                                    <img className="img-fluid" src="https://via.placeholder.com/640x360?text=1" />
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="col-md-3">
                                <div className="card card-body">
                                    <img className="img-fluid" src="https://via.placeholder.com/640x360?text=2" />
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="col-md-3">
                                <div className="card card-body">
                                    <img className="img-fluid" src="https://via.placeholder.com/640x360?text=3" />
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="col-md-3">
                                <div className="card card-body">
                                    <img className="img-fluid" src="https://via.placeholder.com/640x360?text=4" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ProductSale;