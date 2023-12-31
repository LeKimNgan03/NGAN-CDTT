import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate, useParams } from "react-router-dom";
import userservice from '../../../services/UserService';
import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';

function UserShow() {
    const navigate = useNavigate();
    const { id } = useParams("id");
    const [user, setUser] = useState([]);

    useEffect(() => {
        {
            userservice.getById(id).then((result) => {
                setUser(result.data.user);
            });
        }
    }, []);

    function userDelete(id) {
        userservice.sortdelete(id).then((result) => {
            alert(result.data.message);
            navigate('/admin/user', { replace: true })
        });
    }

    return (
        <section className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-dark">CHI TIẾT NGƯỜI DÙNG</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/user" className="btn btn-sm btn-success me-1">Về Danh Sách</Link>
                        <Link to={`/admin/user/update/${user.id}`} className="btn btn-sm btn-warning me-1">
                            <FaEdit /> Sửa
                        </Link>
                        <button onClick={() => userDelete(user.id)} className="btn btn-sm btn-danger me-1">
                            <FaTrash /> Xóa
                        </button>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <table className="table table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <td className="text-dark" style={{ width: 300 }}><strong>Tên Trường</strong></td>
                            <td className="text-dark"><strong>Giá Trị</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>ID</td><td>{id}</td></tr>
                        <tr><td>Tên Người Dùng</td><td>{user.name}</td></tr>
                        <tr><td>Giới Tính</td><td>{user.gender}</td></tr>
                        <tr><td>Email</td><td>{user.email}</td></tr>
                        <tr><td>Điện Thoại</td><td>{user.phone}</td></tr>
                        <tr><td>Tên Tài Khoản</td><td>{user.username}</td></tr>
                        <tr><td>Mật Khẩu</td><td>{user.password}</td></tr>
                        <tr><td>Địa Chỉ</td><td>{user.address}</td></tr>
                        <tr><td>Hình</td><td><img
                            style={{ width: 200 }}
                            className="img-fluid"
                            src={`${urlImage}user/${user.image}`}
                            alt={user.name} /></td></tr>
                        <tr><td>Vai Trò</td><td>{user.roles}</td></tr>
                        <tr><td>Trạng Thái</td><td>{user.status}</td></tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default UserShow;