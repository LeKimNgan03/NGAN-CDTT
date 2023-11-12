import { Link } from 'react-router-dom';
import { urlImage } from '../../config';

function ProductSale(props) {
    function renderNumber(number) {
        // Using the ternary operator to avoid the error
        const digits = (number || '').toString().split("");
        let result = "";
        for (let i = 0; i < digits.length; i++) {
            let index = digits.length - 1;
            result += digits[i];
            if (i % 3 === 0 && index !== 0) {
                result += ".";
            }
            index--;
        }
        return result;
    }

    return (
        <div className="col-md-3 d-flex align-items-center my-1">
            <div className="card border-light">
                <Link to={`/product-detail/${props.productsale.slug}`}>
                    <img
                        src={`${urlImage}product/${props.productsale.image}`}
                        className="img-fluid"
                        alt={props.productsale.image} />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link
                            className="text-dark nav-link active text-center"
                            to={`/product-detail/${props.productsale.slug}`}>
                            {props.productsale.name}
                        </Link>
                    </h5>
                    <p className="card-text text-center">{renderNumber(props.productsale.pricesale)}VNĐ</p>
                </div>
            </div>
        </div>
    );
}

export default ProductSale;