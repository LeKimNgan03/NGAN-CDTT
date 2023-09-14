import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import Introduce from "../pages/frontend/Introduce";
import Product from "../pages/frontend/Product";

const RouterPublic = [
    { path: '/', component: Home },
    { path: '/gioi-thieu', component: Introduce },
    { path: '/san-pham', component: Product },
    // { path: '/blog', component: Post},
    { path: '/lien-he', component: Contact },

    // { path: '/danh-muc-san-pham/:slug', component: ProductCategory },
    // { path: '/chi-tiet-san-pham/:slug', component: Detail },
    // { path: '/chi-tiet-bai-viet/:id', component: PostDetail },
    // { path: '/danh-muc-bai-viet/:slug', component: PostTopic },

    // { path: '/chinh-sach-mua-hang', component: BuyPolicy },
    // { path: '/chinh-sach-bao-hanh', component: WarrantyPolicy },
    // { path: '/chinh-sach-van-chuyen', component: ShipPolicy },
    // { path: '/chinh-sach-doi-tra', component: RefundPolicy },
];

export default RouterPublic;