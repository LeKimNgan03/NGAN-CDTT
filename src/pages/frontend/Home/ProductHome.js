import ProductItem from "../../../components/frontend/productitem";

function ProductHome() {
    return (
        <div>
            <div className="">
                <div className="product-category">
                    <h4 className="p-3 pb-0 fw-bold text-uppercase text-center">Sản phẩm</h4>
                    <hr className="" />
                    <div className="row">
                        <ProductItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductHome;