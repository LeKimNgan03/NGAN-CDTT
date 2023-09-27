import { useParams } from 'react-router-dom';
import productservice from '../../../services/ProductService';
import { useEffect, useState } from "react";
import { urlImage } from '../../../config';
import ProductItem from '../../../components/frontend/productitem';

function ProductDetail() {
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
    }, [slug])

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
                                <p className="fs-5">{product.price}đ</p>
                            </div>
                        </div>

                        <div className="row">
                            {/* Tăng giảm số lượng */}
                            <div className="col-7">
                                <button
                                    className="btn w-100"
                                    style={{ backgroundColor: `#FDE5EC`, color: `#E48586` }}>
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
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