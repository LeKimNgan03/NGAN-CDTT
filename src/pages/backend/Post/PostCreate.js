import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import postservice from "../../../services/PostService";
import topicservice from "../../../services/TopicService";
import { useNavigate } from "react-router-dom";

function PostCreate() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        {
            postservice.getAll().then((result) => {
                setPosts(result.data.posts);
            });
        }
    }, []);

    const [topics, setTopics] = useState([]);
    useEffect(() => {
        {
            topicservice.getAll().then((result) => {
                setTopics(result.data.topics);
            });
        }
    }, []);

    const [topic_id, setTopicId] = useState(0);
    const [detail, setDetail] = useState('');
    const [type, setType] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState(1);

    async function postStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        const post = new FormData();
        post.append("topic_id", topic_id);
        post.append("title", title);
        post.append("detail", detail);
        post.append("metakey", metakey);
        post.append("type", type);
        post.append("metadesc", metadesc);
        post.append("status", status);
        if (image.files.length === 0) {
            post.append("image", "");
        }
        else {
            post.append("image", image.files[0]);
        }
        await postservice.create(post)
            .then((res) => {
                alert(res.data.message)
                navigate('/admin/post', { replace: true })
            });
    }

    return (
        <form onSubmit={postStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-dark">THÊM BÀI VIẾT</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-1">Lưu</button>
                            <Link to="/admin/post" className="btn btn-sm btn-info">Về Danh Sách</Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="topic_id">Đề Tài</label>
                                <select
                                    name="topic_id"
                                    value={topic_id}
                                    className="form-control"
                                    onChange={(e) => setTopicId(e.target.value)}>
                                    <option value="0">None</option>
                                    {topics.map((topic, index) => (
                                        <option key={index} value={topic.id}>{topic.name}</option>
                                    ))}
                                </select>
                            </div>

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
                                <label htmlFor="name">Chi Tiết</label>
                                <textarea
                                    type="text"
                                    name="name"
                                    rows={4}
                                    value={detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                    className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">Kiểu</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="image">Hình Đại Diện</label>
                                <input type="file" id="image" className="form-control" />
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
                                    rows={3}
                                    value={metadesc}
                                    onChange={(e) => setMetadesc(e.target.value)}
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

export default PostCreate;