import httpAxios from "../httpAxios";

function getAll() {
    return httpAxios.get('orderdetail/index');
}

function getById(id) {
    return httpAxios.get(`orderdetail/show/${id}`);
}

function create(orderdetail) {
    return httpAxios.post('orderdetail/store', orderdetail);
}

function update(orderdetail, id) {
    return httpAxios.post(`orderdetail/update/${id}`, orderdetail);
}

function remove(id) {
    return httpAxios.delete(`orderdetail/destroy/${id}`);
}

const orderdetailservice = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default orderdetailservice;