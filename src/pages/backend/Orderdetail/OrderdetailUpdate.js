import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import orderdetailservice from "../../../services/OrderdetailService";
import productservice from "../../../services/ProductService";
import orderservice from "../../../services/OrderService";

function OrderdetailUpdate() {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        {
            productservice.getAll().then((result) => {
                setProducts(result.data.products);
            });
        }
    }, []);

    useEffect(() => {
        {
            orderservice.getAll().then((result) => {
                setOrders(result.data.orders);
            });
        }
    }, []);

    const navigate = useNavigate();
    const [order_id, setOrderId] = useState(0);
    const [product_id, setProductId] = useState(0);
    const [total, setTotal] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState();

    const { id } = useParams("id");

    useEffect(() => {
        {
            orderdetailservice.getById(id).then((result) => {
                const tmp = result.data.orderdetail;
                setOrderId(tmp.order_id);
                setProductId(tmp.product_id);
                setPrice(tmp.price);
                setTotal(tmp.total);
                setQty(tmp.qty);
            });
        }
    }, []);

    //Lấy danh sách
    const [orderdetails, setOrderdetails] = useState([]);
    useEffect(() => {
        {
            orderdetailservice.getAll().then((result) => {
                setOrderdetails(result.data.orderdetails);
            });
        }
    }, []);

    async function orderdetailEdit(event) {
        event.preventDefault();
        const orderdetail = new FormData();
        orderdetail.append("order_id", order_id);
        orderdetail.append("product_id", product_id);
        orderdetail.append("price", price);
        orderdetail.append("qty", qty);
        orderdetail.append("total", total);
        await orderdetailservice.update(orderdetail, id)
            .then((res) => {
                alert(res.data.message)
                navigate('/admin/orderdetail', { replace: true })
            });
    }

    return (
        <form onSubmit={orderdetailEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-dark">CẬP NHẬT CHI TIẾT ĐƠN HÀNG</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className=" btn btn-sm btn-success me-1">Lưu</button>
                            <Link to="/admin/orderdetail" className="btn btn-sm btn-info">Về Danh Sách</Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9 w-100">
                            <div className="mb-3">
                                <label htmlFor="order_id">Đơn hàng</label>
                                <select
                                    name="order_id"
                                    value={order_id}
                                    className="form-control"
                                    onChange={(e) => setOrderId(e.target.value)}>
                                    <option value="0">None</option>
                                    {orders.map((order, index) => (
                                        <option key={index} value={order.id}>{order.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="product_id">Sản phẩm</label>
                                <select
                                    name="product_id"
                                    value={product_id}
                                    className="form-control"
                                    onChange={(e) => setProductId(e.target.value)}>
                                    <option value="0">None</option>
                                    {products.map((product, index) => (
                                        <option key={index} value={product.id}>{product.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">Giá tiền</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">Số lượng</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                    className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">Total</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={total}
                                    onChange={(e) => setTotal(e.target.value)}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default OrderdetailUpdate;