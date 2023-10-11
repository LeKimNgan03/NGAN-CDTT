import { Link } from "react-router-dom";

function Register() {
    return (
        <section className="vh-100 d-flex">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-4">
                        <form>
                            <h1 className="fs-1 text-uppercase fw-bold text-center my-2">Đăng ký</h1>
                            {/* <!-- Name input --> */}
                            <div className="form-outline mb-3">
                                <input type="email" className="form-control form-control-lg"
                                    placeholder="Họ tên" />
                            </div>

                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-3">
                                <input type="email" className="form-control form-control-lg"
                                    placeholder="Email" />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <input type="password" className="form-control form-control-lg"
                                    placeholder="Nhập mật khẩu" />
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" className="form-control form-control-lg"
                                    placeholder="Nhập lại mật khẩu" />
                            </div>

                            {/* Register Button */}
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <Link to="/">
                                    <button type="button" className="btn btn-lg text-dark w-100"
                                        style={{ paddingLeft: `2.5rem`, paddingRight: `2.5rem`, backgroundColor: `#F8E8EE` }}>
                                        Đăng ký
                                    </button>
                                </Link>
                                <p className="small fw-bold mt-2 pt-1 mb-0 text-center">Bạn đã có tài khoản?
                                    <Link to="/login" className="link-danger mx-1">Đăng nhập</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;