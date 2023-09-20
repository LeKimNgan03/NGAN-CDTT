import { Link } from "react-router-dom";
import { urlImage } from "../../config";

function PostItem(props) {
    return (
        <div class="mb-3 mx-4" style={{ maxWidth: 1350 }}>
            <div class="row">
                <div class="col-md-3">
                    <Link to={`/blog-detail/${props.post.id}`}>
                        <img style={{width: `100%`}} src={`${urlImage}post/${props.post.image}`} className="img-fluid" alt={props.post.image} />
                    </Link>
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h5 class="card-title">
                            <Link className="text-dark nav-link active" to={`/blog-detail/${props.post.id}`}>
                                {props.post.title}
                            </Link>
                        </h5>
                        <p class="card-text my-2">{props.post.detail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;