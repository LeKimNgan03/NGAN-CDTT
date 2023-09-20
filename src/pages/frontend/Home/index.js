import Contact from "../Contact";
import ProductHome from "./ProductHome";
import Slider from "./Slider";

function Home() {
    return (
        <section className="maincontetnt">
            <div className="slider">
                <Slider />
            </div>

            <div className="product">
                <ProductHome />
            </div>

        </section>
    );
}

export default Home;