import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import policyservice from "../../../services/PolicyService";
import { useNavigate } from "react-router-dom";

function PolicyCreate() {
    const navigate = useNavigate();
    const [policies, setPolicies] = useState([]);
    useEffect(() => {
        {
            policyservice.getAll().then((result) => {
                setPolicies(result.data.policies);
            });
        }
    }, []);

    const [title, setTitle] = useState('');
    const [subtitle, setSubTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [status, setStatus] = useState(1);

    async function policyStore(event) {
        event.preventDefault();
        const policy = new FormData();
        policy.append("title", title);
        policy.append("subtitle", subtitle);
        policy.append("detail", detail);
        policy.append("status", status);
        await policyservice.create(policy)
            .then((res) => {
                alert(res.data.message)
                navigate('/admin/policy', { replace: true })
            });
    }

    return (
        <form onSubmit={policyStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-dark">THÊM CHÍNH SÁCH</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-1">Lưu</button>
                            <Link to="/admin/policy" className="btn btn-sm btn-info">Về Danh Sách</Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9 w-100">
                            <div className="mb-3">
                                <label htmlFor="name">Tiêu Đề</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">Tiêu Đề Phụ</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={subtitle}
                                    onChange={(e) => setSubTitle(e.target.value)}
                                    className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">Chi Tiết</label>
                                <textarea
                                    type="text"
                                    name="name"
                                    value={detail}
                                    rows={6}
                                    onChange={(e) => setDetail(e.target.value)}
                                    className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="sort">Trạng Thái</label>
                                <select
                                    name="sort"
                                    value={status}
                                    className="form-control"
                                    onChange={(e) => setStatus(e.target.value)}>
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default PolicyCreate;