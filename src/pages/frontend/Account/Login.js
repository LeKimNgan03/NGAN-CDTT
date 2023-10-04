import { Link } from "react-router-dom";

function Login() {
    return (
        <section className="vh-100 d-flex">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>

                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <h1 className="fs-1 text-uppercase fw-bold text-primary text-center my-2">Đăng nhập</h1>
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

                            {/*  */}
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <Link to="/">
                                    <button type="button" className="btn btn-primary btn-lg w-100"
                                        style={{ paddingLeft: `2.5rem`, paddingRight: `2.5rem` }}>Đăng nhập</button>
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