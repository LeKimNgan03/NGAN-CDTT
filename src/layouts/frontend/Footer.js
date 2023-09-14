import { BsTelephoneFill } from "react-icons/bs";
import { GoMail, GoLocation } from "react-icons/go";

function Footer() {
    return (
        <div>
            <div className="">
                <footer
                    className="text-center text-lg-start text-white"
                    style={{ backgroundColor: `#E48586` }}>
                    <div className="container p-6 pb-0">
                        <section className="">
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">douce muse</h6>
                                    <p>
                                        Thông điệp mà chúng tôi muốn truyền tải đến bạn,
                                        mỗi ngày của bạn hãy luôn rực rỡ, đầy năng lượng
                                        và nhiều yêu thương như những bông hoa biết nói.
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Sản phẩm</h6>
                                    <p><a className="text-white">MDBootstrap</a></p>
                                    <p><a className="text-white">MDWordPress</a></p>
                                    <p><a className="text-white">BrandFlow</a></p>
                                    <p><a className="text-white">Bootstrap Angular</a></p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Chính sách</h6>
                                    <p><a className="text-white">Your Account</a></p>
                                    <p><a className="text-white">Become an Affiliate</a></p>
                                    <p><a className="text-white">Shipping Rates</a></p>
                                    <p><a className="text-white">Help</a></p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Liên hệ</h6>
                                    <p><i className="fas fa-home mr-3" /><GoLocation /> TP.Thủ Đức, TP.HCM</p>
                                    <p><i className="fas fa-envelope mr-3" /><GoMail /> info@gmail.com</p>
                                    <p><i className="fas fa-phone mr-3" /><BsTelephoneFill /> + 01 234 567 88</p>
                                    <p><i className="fas fa-phone mr-3" /><BsTelephoneFill /> + 01 234 567 88</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;