import { Link } from "react-router-dom";

function Product() {
    return (
        <div>
            <Link className="p-3 pb-0 fw-light text-uppercase" to="/">Sản phẩm</Link>

            <hr className="mx-3" />
        </div>
    );
}

export default Product;