import Home from "../pages/frontend/Home";
import Introduce from "../pages/frontend/Introduce";
import Product from "../pages/frontend/Product";
import Post from "../pages/frontend/Blog";
import Contact from "../pages/frontend/Contact";

import BlogDetail from "../pages/frontend/BlogDetail";
import ProductDetail from "../pages/frontend/ProductDetail";
import ProductCategory from "../pages/frontend/ProductCategory";

import ShoppingCart from "../pages/frontend/ShoppingCart";

import Policy from "../pages/frontend/Policy/Policy";
import PolicyDelivery from "../pages/frontend/Policy/PolicyDelivery";
import PolicyReturn from "../pages/frontend/Policy/PolicyReturn";
import PolicyPrivacy from "../pages/frontend/Policy/PolicyPrivacy";

const RouterPublic = [
    { path: '/', component: Home },
    { path: '/gioi-thieu', component: Introduce },
    { path: '/san-pham', component: Product },
    { path: '/blog', component: Post },
    { path: '/lien-he', component: Contact },

    { path: '/product-detail/:slug', component: ProductDetail },
    { path: '/blog-detail/:id', component: BlogDetail },
    { path: '/danh-muc-san-pham/:slug', component: ProductCategory },

    { path: '/cart', component: ShoppingCart },

    { path: '/chinh-sach-van-chuyen', component: PolicyDelivery },
    { path: '/chinh-sach-doi-tra', component: PolicyReturn },
    { path: '/chinh-sach-bao-mat', component: PolicyPrivacy },
    { path: '/quy-dinh-chinh-sach', component: Policy },
];

export default RouterPublic;