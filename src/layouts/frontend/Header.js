import { BsTwitter, BsInstagram, BsFacebook, BsTiktok, BsBell, BsSearch, BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="py-1" style={{ backgroundColor: `#E48586` }}>
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2 text-white active" aria-current="page"><BsFacebook /></a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2 text-white"><BsInstagram /></a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2 text-white"><BsTwitter /></a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2 text-white"><BsTiktok /></a></li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item"><Link to="" className="nav-link link-body-emphasis px-2 text-white">Thông báo</Link></li>
                        <li className="nav-item"><Link to="" className="nav-link link-body-emphasis px-2 text-white">Đăng nhập</Link></li>
                        <li className="nav-item"><Link to="" className="nav-link link-body-emphasis px-2 text-white">Đăng ký</Link></li>
                    </ul>
                </div>
            </nav>

            <header className="py-3" style={{ backgroundColor: `#E48586` }}>
                <div className="container d-flex flex-wrap justify-content-center">
                    <Link to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                        <span className="fs-4 text-white">Douce Muse</span>
                    </Link>
                    <form className="col-8 col-lg-9 mb-3 mb-lg-0 " role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                    <button className="btn btn-outline-light mx-1" type="submit"><BsSearch /></button>
                    <button className="btn mx-1 text-white" type="submit">
                        <BsCart2 />
                        <span class="position-static top-0 start-100 translate-middle badge rounded-pill bg-secondary">0</span>
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Header;