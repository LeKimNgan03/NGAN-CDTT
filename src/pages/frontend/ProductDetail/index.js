import { useParams } from 'react-router-dom';
import { BsCartPlusFill } from 'react-icons/bs';
import productservice from '../../../services/ProductService';
import { useEffect, useState } from "react";
import { urlImage } from '../../../config';
import ProductItem from '../../../components/frontend/productitem';

function ProductDetail() {
    // Get Product
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

    // // Get the input field and the two buttons
    // const input = document.getElementById('my-input');
    // const increaseBtn = document.getElementById('increase-btn');
    // const decreaseBtn = document.getElementById('decrease-btn');

    // // Add event listeners to the buttons
    // increaseBtn.addEventListener('click', increaseValue);
    // decreaseBtn.addEventListener('click', decreaseValue);

    // // Functions to increase and decrease the value of the input field
    // function increaseValue() {
    //     input.value++;
    // }
    // function decreaseValue() {
    //     input.value--;
    // }

    return (
        <section className="maincontent my-4">
            <div className="product-detail mx-2">
                <div className="row my-3">
                    <div className="col-md-5">
                        <img
                            style={{ width: 600 }}
                            src={`${urlImage}product/${product.image}`}
                            className="img-fluid"
                            alt={product.image} />
                    </div>

                    <div className="col-md-6">
                        <h2 className="fw-light">{product.name}</h2>
                        <div className="row">
                            <div className="col-6 fs-5">
                                <p className="fs-5">{product.price} VND</p>
                            </div>
                        </div>

                        <div className="row">
                            {/* Tăng giảm số lượng
                            <form className="align-items-center" style={{width: `300px`}}>
                                <span className="input-group-text bg-white" type="submit" id="increase-btn">+</span>
                                <input className="form-control no-outline" type="number" id="my-input" value="0" />
                                <span className="input-group-text bg-white" type="submit" id="decrease-btn">-</span>

                                <div className="input-group-text bg-white" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                <input className="form-control no-outline" type="number" id="number" value="0" />
                                <div className="input-group-text bg-white" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                            </form> */}

                            {/* Thêm sản phẩm */}
                            <button
                                className="btn w-50"
                                style={{ backgroundColor: `#F8E8EE` }}>
                                <BsCartPlusFill /> Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>

                    <div className="my-3">
                        <img
                            style={{ width: 200 }}
                            src={`${urlImage}product/${product.image}`}
                            className="img-fluid"
                            alt={product.image} />
                    </div>
                </div>

                <h3 className="p-3 pb-0 fw-light text-uppercase text-center">Sản phẩm liên quan</h3>

                <div className="row">
                    {product_other.map((product, index) => <ProductItem product={product} key={index} />)}
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;