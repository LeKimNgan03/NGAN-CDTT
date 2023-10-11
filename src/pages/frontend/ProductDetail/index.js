import { useEffect, useState } from "react";
import { urlImage } from '../../../config';
import { useParams } from 'react-router-dom';
import { BsCartPlusFill } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import productservice from '../../../services/ProductService';
import ProductItem from '../../../components/frontend/productitem';

function ProductDetail() {
    // Get Product Detail
    const { slug } = useParams();
    const [product, setProducts] = useState([]);
    const [product_other, setProductOther] = useState([]);
    useEffect(() => {
        {
            productservice.getProductBySlug(slug).then((result) => {
                if (result.data.success === true) {
                    setProducts(result.data.product);
                    setProductOther(result.data.product_other);
                }
            });
        }
    }, [slug]);

    // Format Number Price
    function renderNumber(number) {
        // Using the ternary operator to avoid the error
        const digits = (number || '').toString().split("");
        let result = "";
        for (let i = 0; i < digits.length; i++) {
            result += digits[i];
            if (i % 3 === 0) {
                result += ".";
            }
        }
        return result;
    }

    // Add product to shopping cart 
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            setCart(JSON.parse(cartData));
        }
    }, []);

    const addToCart = () => {
        const productCopy = { ...product };
        const updatedCart = [...cart, productCopy];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Create an Increment and Decrement Button
    const [amount, setAmount] = useState(1);

    const increaseValue = () => {
        setAmount(prevAmount => prevAmount + 1);
    }

    const decreaseValue = () => {
        if (amount > 1) {
            setAmount(prevAmount => prevAmount - 1);
        } else {
            return amount;
        }
    }

    return (
        <section className="main-content my-4">
            <div className="product-detail mx-2">
                <div className="container d-flex justify-content-center my-3">
                    {/* Img */}
                    <div className="col-md-6">
                        <img
                            style={{ width: 600 }}
                            src={`${urlImage}product/${product.image}`}
                            className="img-fluid border"
                            alt={product.image} />
                    </div>

                    {/* Detail */}
                    <div className="col-md-6 mx-2">
                        <h2 className="fw-light">{product.name}</h2>

                        <hr />

                        <div className="col-6 fs-5">
                            <p className="fs-5">{renderNumber(product.price)}VNĐ</p>
                        </div>

                        <div className="d-flex">
                            {/* Increment and Decrement Button */}
                            <div
                                className="input-group border rounded-pill justify-content-center"
                                style={{ width: 120 }}>
                                <button
                                    className="input-text-group btn btn-minus"
                                    onClick={decreaseValue}><AiOutlineMinus />
                                </button>
                                <div className="p-2 text-center">{amount}</div>
                                <button
                                    className="input-text-group btn btn-plus"
                                    onClick={increaseValue}><AiOutlinePlus />
                                </button>
                            </div>

                            {/* Add To Cart Button */}
                            <button
                                onClick={() => addToCart(ProductItem)}
                                className="btn rounded-5 mx-3"
                                style={{ backgroundColor: `#A73121`, color: `#fff` }}>
                                <BsCartPlusFill /> Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="container my-4">
                    <h5 className="text-center fw-light">Mô tả</h5>

                    <hr />

                    <p className="">{product.detail}</p>

                    <img
                        style={{ width: 300 }}
                        src={`${urlImage}product/${product.image}`}
                        className="img-fluid"
                        alt={product.image} />
                </div>

                {/* Other Product */}
                <h3 className="p-3 pb-0 fw-light text-uppercase text-center">Sản phẩm liên quan</h3>

                <div className="row">
                    {product_other.map((product, index) => <ProductItem product={product} key={index} />)}
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;