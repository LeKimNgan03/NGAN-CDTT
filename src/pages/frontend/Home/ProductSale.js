import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import productsaleservice from '../../../services/ProductsaleService';

function ProductSale(props) {
    const [productsales, setProducts] = useState([]);
    useEffect(() => {
        {
            productsaleservice.getProductSaleHome(8, props.product.id).then((result) => {
                setProducts(result.data.productsales);
            });
        }
    }, [])

    return (
        <div className="product-sale mx-2 mt-3 rounded-3" style={{ backgroundColor: `#FFD07F` }}>
            <div className="">
                <h4 className="fw-bold text-uppercase p-3">Sale</h4>
            </div>

            <div className="row">

            </div>
        </div>
    );
}

export default ProductSale;