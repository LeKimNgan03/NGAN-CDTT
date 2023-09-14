import Contact from "../Contact";
import Category from "./Category";
import Slider from "./Slider";

function Home() {
    return (
        <section className="maincontetnt">
            <div className="slider">
                <Slider />
            </div>

            <div className="category">
                <Category />
            </div>

            <div className="product">

            </div>

            <div className="contact">
                <Contact />
            </div>
        </section>
    );
}

export default Home;