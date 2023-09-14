import cate1 from "../../../assets/img/cate-1.jpg";
import cate2 from "../../../assets/img/cate-2.jpg";
import cate3 from "../../../assets/img/cate-3.jpg";

function Category() {
    return (
        <div>
            <div className="container px-2 py-4" id="custom-cards">
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col" style={{height: 350}}>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4"
                            style={{
                                backgroundImage: "url(" + cate1 + ")",
                                backgroundSize: 'cover'
                            }}>
                            <div className="d-flex flex-column h-100 p-5 text-white text-shadow-1" style={{marginTop: 210}}>
                                <h3 className="display-6 lh-1 fw-bold text-uppercase">Hoa Bó</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col" style={{height: 350}}>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4"
                            style={{
                                backgroundImage: "url(" + cate2 + ")",
                                backgroundSize: 'cover'
                            }}>
                            <div className="d-flex flex-column h-100 p-5 text-white text-shadow-1" style={{marginTop: 210}}>
                                <h3 className="display-6 lh-1 fw-bold text-uppercase">Hoa cưới</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col" style={{height: 350}}>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4"
                            style={{
                                backgroundImage: "url(" + cate3 + ")",
                                backgroundSize: 'cover'
                            }}>
                            <div className="d-flex flex-column h-100 p-5 text-shadow-1" style={{marginTop: 210}}>
                                <h3 className="display-6 lh-1 fw-bold text-uppercase">Bình hoa</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;