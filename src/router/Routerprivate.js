import DashBoard from "../pages/backend/DashBoard"

import MenuList from "../pages/backend/Menu/MenuList";
import MenuCreate from "../pages/backend/Menu/MenuCreate";
import MenuShow from "../pages/backend/Menu/MenuShow";
import MenuUpdate from "../pages/backend/Menu/MenuUpdate";

import CategoryList from "../pages/backend/Category/CategoryList";
import CategoryCreate from "../pages/backend/Category/CategoryCreate";
import CategoryShow from "../pages/backend/Category/CategoryShow";
import CategoryUpdate from "../pages/backend/Category/CategoryUpdate";

import PostList from "../pages/backend/Post/PostList";
import PostCreate from "../pages/backend/Post/PostCreate";
import PostShow from "../pages/backend/Post/PostShow";
import PostUpdate from "../pages/backend/Post/PostUpdate";

import ProductList from "../pages/backend/Product/ProductList";
import ProductCreate from "../pages/backend/Product/ProductCreate";
import ProductShow from "../pages/backend/Product/ProductShow";
import ProductUpdate from "../pages/backend/Product/ProductUpdate";

import SliderList from "../pages/backend/Slider/SliderList";
import SliderCreate from "../pages/backend/Slider/SliderCreate";
import SliderShow from "../pages/backend/Slider/SliderShow";
import SliderUpdate from "../pages/backend/Slider/SliderUpdate";

const RouterPrivate = [
    { path: '/admin', component: DashBoard },

    { path: '/admin/category', component: CategoryList },
    { path: '/admin/category/create', component: CategoryCreate },
    { path: '/admin/category/update/:id', component: CategoryUpdate },
    { path: '/admin/category/show/:id', component: CategoryShow },

    { path: '/admin/menu', component: MenuList },
    { path: '/admin/menu/create', component: MenuCreate },
    { path: '/admin/menu/update/:id', component: MenuUpdate },
    { path: '/admin/menu/show/:id', component: MenuShow },

    { path: '/admin/post', component: PostList },
    { path: '/admin/post/create', component: PostCreate },
    { path: '/admin/post/update/:id', component: PostUpdate },
    { path: '/admin/post/show/:id', component: PostShow },

    { path: '/admin/product', component: ProductList },
    { path: '/admin/product/create', component: ProductCreate },
    { path: '/admin/product/update/:id', component: ProductUpdate },
    { path: '/admin/product/show/:id', component: ProductShow },

    { path: '/admin/slider', component: SliderList },
    { path: '/admin/slider/create', component: SliderCreate },
    { path: '/admin/slider/update/:id', component: SliderUpdate },
    { path: '/admin/slider/show/:id', component: SliderShow },

];

export default RouterPrivate;