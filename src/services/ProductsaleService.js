import httpAxios from "../httpAxios";

function getAll() {
    return httpAxios.get('productsale/index');
}

function getById(id) {
    return httpAxios.get(`productsale/show/${id}`);
}

function create(productsale) {
    return httpAxios.post('productsale/store', productsale);
}

function update(productsale, id) {
    return httpAxios.post(`productsale/update/${id}`, productsale);
}

function remove(id) {
    return httpAxios.delete(`productsale/destroy/${id}`);
}

// 
function getProductSaleHome(limit, category_id) {
    return httpAxios.get(`productsale_home/${limit}/${category_id}`);
}

const productsaleservice = {
    getProductSaleHome,
    getAll,
    getById,
    create,
    update,
    remove
}

export default productsaleservice;