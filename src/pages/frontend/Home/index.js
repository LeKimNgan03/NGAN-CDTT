import { useEffect, useState } from "react";
import categoryservice from "../../../services/CategoryService";
import ProductHome from "./ProductHome";
import Slider from "./Slider";

function Home() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        {
            categoryservice.getCategoryByParentId(0).then((result) => {
                setCategories(result.data.categories);
            });
        }
    }, [])

    return (
        <section className="main-content">
            <div className="slider">
                <Slider />
            </div>

            <div className="product">
                {categories.map((category, index) => <ProductHome key={index} category={category} />)}
            </div>
        </section>
    );
}

export default Home;