import { useEffect, useState } from "react";
import { urlImage } from '../../../config';
import sliderservice from "../../../services/SliderService";

function Slider() {
    const [sliders, setSliders] = useState([]);
    useEffect(() => {
        {
            sliderservice.getByPosition('slidershow').then((result) => {
                setSliders(result.data.sliders);
            });
        }
    }, []);

    return (
        <div>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    {sliders.map((slider, index) => {
                        return index === 0 ? (
                            <div class="carousel-item active" key={index}>
                                <img src={`${urlImage}slider/${slider.image}`} class="d-block w-100" alt={slider.name} />
                            </div>
                        ) : (
                            <div class="carousel-item" key={index}>
                                <img src={`${urlImage}slider/${slider.image}`} class="d-block w-100" alt={slider.name} />
                            </div>
                        );
                    })}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true" />
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true" />
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Slider;