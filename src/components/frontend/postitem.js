import { Link } from "react-router-dom";
import { urlImage } from "../../config";

function PostItem(props) {
    return (
        <div className="mb-3 mx-4" style={{ maxWidth: 1350 }}>
            <div className="row">
                <div className="col-md-3">
                    <Link to={`/blog-detail/${props.post.id}`}>
                        <img
                            style={{ width: `100%` }}
                            src={`${urlImage}post/${props.post.image}`}
                            className="img-fluid"
                            alt={props.post.image} />
                    </Link>
                </div>

                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">
                            <Link
                                className="nav-link active"
                                to={`/blog-detail/${props.post.id}`}>
                                {props.post.title}
                            </Link>
                        </h5>
                        <p className="card-text my-2">{props.post.detail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;