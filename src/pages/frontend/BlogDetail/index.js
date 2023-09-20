import { useEffect, useState } from "react";
import postservice from "../../../services/PostService";
import PostItem from "../../../components/frontend/postitem";
import { useParams } from "react-router-dom";
import { urlImage } from "../../../config";

function BlogDetail() {
    const { id } = useParams();
    const [post, setPosts] = useState([]);
    const [post_other, setPostOther] = useState([]);

    useEffect(() => {
        {
            postservice.getPostById(id).then((result) => {
                if (result.data.success === true) {
                    setPosts(result.data.post);
                    setPostOther(result.data.post_other);
                }
            });
        }
    }, [id])

    return (
        <section className="maincontent my-3">
            <div className="">
                <h3 className="p-3 pb-0 fw-light text-uppercase">{post.title}</h3>

                <hr className="mx-3" />

                <div className="row my-3 mx-2">
                    {/* <img src={`${urlImage}post/${post.image}`} className="img-fluid my-2" alt={post.image} /> */}
                    <h5>{post.detail}</h5>
                    <p>{post.metadesc}</p>
                </div>

                <h3 className="p-3 pb-0 fw-light text-uppercase">Bài viết liên quan</h3>

                <hr className="mx-3" />

                <div className="row">
                    {post_other.map((post, index) => <PostItem post={post} key={index} />)}
                </div>
            </div>
        </section>
    );
}

export default BlogDetail;