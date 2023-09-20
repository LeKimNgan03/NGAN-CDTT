import Product_1 from "../../assets/img/product-1.jpg";

function ProductItem() {
    return (
        <div className="col-md-12 d-flex align-items-center my-2">
            <div className="card mx-2">
                <img src={Product_1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn" style={{ backgroundColor: `#FDE5EC`, color: `#E48586` }}>Thêm vào giỏ hàng</a>
                </div>
            </div>
            <div className="card mx-2">
                <img src={Product_1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn" style={{ backgroundColor: `#FDE5EC`, color: `#E48586` }}>Thêm vào giỏ hàng</a>
                </div>
            </div>
            <div className="card mx-2">
                <img src={Product_1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn" style={{ backgroundColor: `#FDE5EC`, color: `#E48586` }}>Thêm vào giỏ hàng</a>
                </div>
            </div>
            <div className="card mx-2">
                <img src={Product_1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn" style={{ backgroundColor: `#FDE5EC`, color: `#E48586` }}>Thêm vào giỏ hàng</a>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;