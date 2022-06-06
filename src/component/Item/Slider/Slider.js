import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
    return (
        <div className="slider-container">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-slider-fluid"
                        src="https://cdn.britannica.com/06/75906-050-16A53398/mango-fruits.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Mango</h3>
                        <p>
                            mango, (Mangifera indica), member of the cashew
                            family (Anacardiaceae) and one of the most important
                            and widely cultivated fruits of the tropical world.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-slider-fluid"
                        src="https://cdn.britannica.com/18/176518-050-5AB1E61D/lychee-fruits-Southeast-Asia.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>lychee </h3>
                        <p>
                            lychee, (Litchi chinensis), also spelled litchi or
                            lichi, evergreen tree of the soapberry family
                            (Sapindaceae),
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-slider-fluid"
                        src="https://cdn.britannica.com/69/137369-050-F1D9393A/Cranberries.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide berry</h3>
                        <p>
                            berry, in botany, a simple fleshy fruit that usually
                            has many seeds,
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;
