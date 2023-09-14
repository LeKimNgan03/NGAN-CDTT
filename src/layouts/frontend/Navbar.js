import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="d-flex flex-wrap justify-content-center" style={{ backgroundColor: `#FCBAAD` }}>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link text-light" to="/">Trang chủ</Link>
                        <Link className="nav-item nav-link text-light" to="/gioi-thieu">Giới thiệu</Link>
                        <Link className="nav-item nav-link text-light" to="/san-pham">Sản phẩm</Link>
                        <Link className="nav-item nav-link text-light" to="/blog">Bài viết</Link>
                        <Link className="nav-item nav-link text-light" to="/lien-he">Liên hệ</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;