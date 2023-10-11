import { Link } from "react-router-dom";

function Login() {
    return (
        <section className="vh-100 d-flex">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-4 ">
                        <form>
                            <h1 className="fs-1 text-uppercase fw-bold text-center my-2">Đăng nhập</h1>
                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-4">
                                <input type="email" className="form-control form-control-lg"
                                    placeholder="Email" />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <input type="password" className="form-control form-control-lg"
                                    placeholder="Mật khẩu" />
                                <a href="#!" className="text-body text-decoration-none"><p className="text-end">Quên mật khẩu?</p></a>
                            </div>

                            {/* Login Button */}
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <Link to="/">
                                    <button type="button" className="btn btn-lg text-dark w-100"
                                        style={{ paddingLeft: `2.5rem`, paddingRight: `2.5rem`, backgroundColor: `#F8E8EE` }}>
                                        Đăng nhập
                                    </button>
                                </Link>
                                <p className="small fw-bold mt-2 pt-1 mb-0 text-center">Bạn chưa có tài khoản?
                                    <Link to="/register" className="link-danger mx-1">Đăng ký</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;