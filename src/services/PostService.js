import httpAxios from "../httpAxios";

function getAll() {
    return httpAxios.get('post/index');
}

function getById(id) {
    return httpAxios.get(`post/show/${id}`);
}

function create(post) {
    return httpAxios.post('post/store', post);
}

function update(post, id) {
    return httpAxios.post(`post/update/${id}`, post);
}

function remove(id) {
    return httpAxios.delete(`post/destroy/${id}`);
}

// 
function getPostAll() {
    return httpAxios.get(`post_all`);
}

function getPostById(id) {
    return httpAxios.get(`post_detail/${id}`);
}

function getPostList(type, limit) {
    return httpAxios.get(`post_list/${type}/${limit}`);
}

const postservice = {
    getPostAll,
    getPostById,
    getPostList,
    getAll,
    getById,
    create,
    update,
    remove
}

export default postservice;