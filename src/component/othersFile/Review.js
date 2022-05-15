import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Button, Card } from "react-bootstrap";

const Review = () => {
    return (
        <div className="container">
            <div className="row p-5">
                <div className="col-12">
                    <div className="display-4 p-4">Review</div>
                </div>
                <div className="col-12 col-md-8 mx-auto">
                    <OwlCarousel
                        className="owl-carousel owl-theme"
                        loop={true}
                        nav={false}
                        dots={true}
                        autoplay={true}
                        items={1}
                        key="1"
                    >
                        <div className="item">
                            <Card>
                                <Card.Img
                                    className="rounded"
                                    variant="top"
                                    src="https://img.freepik.com/free-vector/shining-circle-purple-lighting-isolated-dark-background_1441-2396.jpg?t=st=1652159389~exp=1652159989~hmac=b87cf65b41d9fd5b3c06a6067f1fb698311f7e3a6904a2a1d9a6f965f9cd1f33&w=740"
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="item">
                            <Card>
                                <Card.Img
                                    className="rounded"
                                    variant="top"
                                    src="https://img.freepik.com/free-vector/shining-circle-purple-lighting-isolated-dark-background_1441-2396.jpg?t=st=1652159389~exp=1652159989~hmac=b87cf65b41d9fd5b3c06a6067f1fb698311f7e3a6904a2a1d9a6f965f9cd1f33&w=740"
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="item">
                            <Card>
                                <Card.Img
                                    className="rounded"
                                    variant="top"
                                    src="https://img.freepik.com/free-vector/shining-circle-purple-lighting-isolated-dark-background_1441-2396.jpg?t=st=1652159389~exp=1652159989~hmac=b87cf65b41d9fd5b3c06a6067f1fb698311f7e3a6904a2a1d9a6f965f9cd1f33&w=740"
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="item">
                            <Card>
                                <Card.Img
                                    className="rounded"
                                    variant="top"
                                    src="https://img.freepik.com/free-vector/shining-circle-purple-lighting-isolated-dark-background_1441-2396.jpg?t=st=1652159389~exp=1652159989~hmac=b87cf65b41d9fd5b3c06a6067f1fb698311f7e3a6904a2a1d9a6f965f9cd1f33&w=740"
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
};

export default Review;
