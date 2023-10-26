import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import brandservice from '../../../services/BrandService';

function BrandUpdate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);
    const { id } = useParams("id");

    useEffect(() => {
        (async function () {
            await brandservice.getById(id).then((result) => {
                const tmp = result.data.brand;
                setName(tmp.name);
                setMetakey(tmp.metakey);
                setMetadesc(tmp.metadesc);
                setStatus(tmp.status);
                setSortOrder(tmp.sort_order);
            });
        })();
    }, []);

    //Lấy danh sách
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        {
            brandservice.getAll().then((result) => {
                setBrands(result.data.brands);
            });
        }
    }, []);

    async function brandEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        const brand = new FormData();
        brand.append("name", name);
        brand.append("metakey", metakey);
        brand.append("metadesc", metadesc);
        brand.append("sort_order", sort_order);
        brand.append("status", status);
        if (image.files.length === 0) {
            brand.append("image", "");
        }
        else {
            brand.append("image", image.files[0]);
        }
        try {
            await brandservice.update(brand, id).then((res) => {
                alert(res.data.message)
                navigate('/admin/brand', { replace: true });
            });
        } catch (error) {
            console.error(error.response.data);
        }
    }

    return (
        <form onSubmit={brandEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-dark">CẬP NHẬT THƯƠNG HIỆU</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-1">Lưu</button>
                            <Link to="/admin/brand" className="btn btn-sm btn-info">Về Danh Sách</Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">Tên Thương Hiệu</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">Từ Khóa</label>
                                <textarea
                                    type="text"
                                    name="name"
                                    value={metakey}
                                    onChange={(e) => setMetakey(e.target.value)}
                                    className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">Mô Tả</label>
                                <textarea
                                    type="text"
                                    name="name"
                                    value={metadesc}
                                    onChange={(e) => setMetadesc(e.target.value)}
                                    className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="sort_order">Sắp Xếp</label>
                                <select
                                    name="sort_order"
                                    value={sort_order}
                                    className="form-control"
                                    onChange={(e) => setSortOrder(e.target.value)}>
                                    <option value="0">None</option>
                                    {brands.map((brand, index) => (
                                        <option key={index} value={brand.sort_order + 1}>Sau {brand.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="image">Hình Đại Diện</label>
                                <input type="file" id="image" className="form-control" />
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

export default BrandUpdate;