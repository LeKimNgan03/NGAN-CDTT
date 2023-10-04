import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti"

function ShoppingCart() {
    return (
        <section className="shopping-cart mx-2">
            <h4 className="p-3 pb-0 fw-bold text-uppercase text-center">Giỏ hàng của bạn</h4>
            <div className="row my-4">
                <div className="col-md-7">

                </div>

                <div className="col-md-5">
                    <table class="table table-bordered table-rounded">
                        <thead>
                            <tr>
                                <th className="text-center" colspan="2">Thông tin đơn hàng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="col-md-3 pb-0">
                                    <p>Tổng tiền: </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <p>Phí vận chuyển sẽ được tính ở trang thanh toán.</p>
                                    <button className="btn btn-danger text-uppercase w-100">Thanh toán</button>
                                    <Link to="/" className="text-decoration-none text-dark">
                                        <p className="text-center p-3 pb-0">
                                            <span><TiArrowBack /></span>
                                            Tiếp tục mua hàng
                                        </p>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

    );
}

export default ShoppingCart;