import { useState, useEffect } from "react";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import orderservice from '../../../services/OrderService';

function OrderList() {
    const [statusdel, setStatusDel] = useState(0);
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        {
            orderservice.getTrash().then((result) => {
                setOrders(result.data.orders);
            });
        }
    }, [statusdel])

    function orderDelete(id) {
        orderservice.remove(id).then((result) => {
            console.log(result.data.message);
            setStatusDel(result.data.id);
        });
    }

    return (
        <section className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-dark">DANH SÁCH ĐƠN HÀNG</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/order/create" className="btn btn-sm btn-success">
                            <FaPlus /> Thêm
                        </Link>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <table className="table table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th style={{ width: 50 }} className="text-center">#</th>
                            <th style={{ width: 160 }} className="text-center">Tên Liên Hệ</th>
                            <th style={{ width: 130 }} className="text-center">Email</th>
                            <th style={{ width: 130 }} className="text-center">Điện Thoại</th>
                            <th style={{ width: 100 }} className="text-center">Địa Chỉ</th>
                            <th style={{ width: 140 }} className="text-center">Ngày Đặt</th>
                            <th style={{ width: 140 }} className="text-center">Chức Năng</th>
                            <th style={{ width: 30 }} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => <tr key={index}>
                            <td className="text-center"><input type="checkbox" /></td>
                            <td className="text-center">{order.name}</td>
                            <td className="text-center">{order.email}</td>
                            <td className="text-center">{order.phone}</td>
                            <td className="text-center">{order.address}</td>
                            <td className="text-center">{order.created_at}</td>
                            <td className="text-center">
                                <Link to={`/admin/order/show/${order.id}`} className="btn btn-sm btn-primary me-1">
                                    <FaRegEye />
                                </Link>
                                <Link to={`/admin/order/update/${order.id}`} className="btn btn-sm btn-warning me-1">
                                    <FaEdit />
                                </Link>
                                <button onClick={() => orderDelete(order.id)} className="btn btn-sm btn-danger me-1">
                                    <FaTrash />
                                </button>
                            </td>
                            <td className="text-center">{order.id}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default OrderList;