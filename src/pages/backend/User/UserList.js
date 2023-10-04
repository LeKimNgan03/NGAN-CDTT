import { FaPlus, FaRegEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import userservice from '../../../services/UserService';
import { urlImage } from '../../../config';

function UserList() {
    const [statusdel, setStatusDel] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        {
            userservice.getAll().then((result) => {
                setUsers(result.data.users);
            });
        }
    }, [statusdel])

    function userDelete(id) {
        userservice.remove(id).then((result) => {
            console.log(result.data.message);
            setStatusDel(result.data.id);
        });
    }

    return (
        <section className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-dark">DANH SÁCH NGƯỜI DÙNG</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/user/create" className="btn btn-sm btn-success">
                            <FaPlus /> Thêm
                        </Link>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <table className="table table-striped table-bordered table-hover" >
                    <thead>
                        <tr>
                            <th style={{ width: 50 }} className="text-center">#</th>
                            <th style={{ width: 150 }} className="text-center">Tên</th>
                            <th style={{ width: 150 }} className="text-center">Hình</th>
                            <th style={{ width: 130 }} className="text-center">Email</th>
                            <th style={{ width: 130 }} className="text-center">Điện thoại</th>
                            <th style={{ width: 130 }} className="text-center">Địa chỉ</th>
                            <th style={{ width: 130 }} className="text-center">Vai trò</th>
                            <th style={{ width: 130 }} className="text-center">Ngày tạo</th>
                            <th style={{ width: 140 }} className="text-center">Chức năng</th>
                            <th style={{ width: 30 }} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr key={index}>
                            <td className="text-center"><input type="checkbox" /></td>
                            <td className="text-center">{user.name}</td>
                            <td><img
                                style={{ width: 200 }}
                                className="img-fluid"
                                src={`${urlImage}user/${user.image}`}
                                alt={user.name} />
                            </td>
                            <td className="text-center">{user.email}</td>
                            <td className="text-center">{user.phone}</td>
                            <td className="text-center">{user.address}</td>
                            <td className="text-center">{user.roles}</td>
                            <td className="text-center">{user.created_at}</td>
                            <td className="text-center">
                                <Link to={`/admin/user/show/${user.id}`} className="btn btn-sm btn-primary me-1">
                                    <FaRegEye />
                                </Link>
                                <Link to={`/admin/user/update/${user.id}`} className="btn btn-sm btn-warning me-1">
                                    <FaEdit />
                                </Link>
                                <button onClick={() => userDelete(user.id)} className="btn btn-sm btn-danger me-1">
                                    <FaTrash />
                                </button>
                            </td>
                            <td className="text-center">{user.id}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default UserList;