import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
    return (
        <div className="slider-container">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-slider-fluid"
                        src="https://media.istockphoto.com/photos/vegetables-and-fruit-with-heart-shape-as-concept-of-cardiovascular-picture-id1285827086?b=1&k=20&m=1285827086&s=170667a&w=0&h=e4riSWiqdS_Kz6ahp_QNF02N1sKD0FN6lFsNJzb98C8="
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-slider-fluid"
                        src="https://media.istockphoto.com/photos/vegetables-and-fruit-with-heart-shape-as-concept-of-cardiovascular-picture-id1285827086?b=1&k=20&m=1285827086&s=170667a&w=0&h=e4riSWiqdS_Kz6ahp_QNF02N1sKD0FN6lFsNJzb98C8="
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-slider-fluid"
                        src="https://media.istockphoto.com/photos/vegetables-and-fruit-with-heart-shape-as-concept-of-cardiovascular-picture-id1285827086?b=1&k=20&m=1285827086&s=170667a&w=0&h=e4riSWiqdS_Kz6ahp_QNF02N1sKD0FN6lFsNJzb98C8="
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;
