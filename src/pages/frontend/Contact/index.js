import { BsTelephoneFill } from "react-icons/bs";
import { GoMail, GoLocation } from "react-icons/go";

function Contact() {
    return (
        <div className="">
            <h4 className="p-3 pb-0 fw-light text-uppercase">LIÊN HỆ VỚI CHÚNG TÔI</h4>

            <hr className="mx-3" />

            <div className="row p-3">
                <div className="col-md-3">
                    <h5 className="pb-2">Địa chỉ của chúng tôi</h5>
                    <p><span className="p-1 rounded-4" style={{ marginRight: 5, backgroundColor: `#FDE5EC`, color: `#E48586` }}><GoLocation /></span> TP.Thủ Đức, TP.HCM</p>
                    <p><span className="p-1 rounded-4" style={{ marginRight: 5, backgroundColor: `#FDE5EC`, color: `#E48586` }}><GoMail /></span> info@gmail.com</p>
                    <p><span className="p-1 rounded-4" style={{ marginRight: 5, backgroundColor: `#FDE5EC`, color: `#E48586` }}><BsTelephoneFill /></span> + 01 234 567 88</p>
                    <p><span className="p-1 rounded-4" style={{ marginRight: 5, backgroundColor: `#FDE5EC`, color: `#E48586` }}><BsTelephoneFill /></span> + 01 234 567 88</p>
                </div>

                <div className="col-md-9">
                    <h5 className="pb-2">Thông tin liên hệ</h5>
                    <div className="contact-form">
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Tên của bạn" />
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Địa chỉ Email" />
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Nội dung" />
                            </div>
                            <button
                                className="btn btn-outline-light"
                                style={{ backgroundColor: `#FDE5EC`, color: `#E48586` }}
                                type="submit">Gửi đi</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;