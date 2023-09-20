import Home from "../pages/frontend/Home";
import Introduce from "../pages/frontend/Introduce";
import Product from "../pages/frontend/Product";
import Post from "../pages/frontend/Blog";
import Contact from "../pages/frontend/Contact";

import BlogDetail from "../pages/frontend/BlogDetail";

const RouterPublic = [
    { path: '/', component: Home },
    { path: '/gioi-thieu', component: Introduce },
    { path: '/san-pham', component: Product },
    { path: '/blog', component: Post},
    { path: '/lien-he', component: Contact },

    // { path: '/product-detail/:slug', component: Detail },
    { path: '/blog-detail/:id', component: BlogDetail },
    // { path: '/danh-muc-san-pham/:slug', component: ProductCategory },

    // { path: '/chinh-sach-van-chuyen', component: ShipPolicy },
    // { path: '/chinh-sach-bao-mat', component: WarrantyPolicy },
    // { path: '/quy-dinh-chinh-sach', component: BuyPolicy },
];

export default RouterPublic;