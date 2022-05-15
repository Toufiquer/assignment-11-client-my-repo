import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Card } from "react-bootstrap";

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
                                    src="https://storage.googleapis.com/rytr-me/public/image/testimonials/meri.jpg"
                                />
                                <Card.Body>
                                    <Card.Title>Meri Pipenbaher</Card.Title>
                                    <Card.Text>
                                        "This fruits is amazing."
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="item">
                            <Card>
                                <Card.Img
                                    className="rounded"
                                    variant="top"
                                    src="https://previews.123rf.com/images/artemstepanov/artemstepanov1606/artemstepanov160601200/57881726-vector-female-face-avatar-template-pictogram-button-round-trendy-flat-icon-with-women-for-business-i.jpg?fj=1"
                                />
                                <Card.Body>
                                    <Card.Title>Alex</Card.Title>
                                    <Card.Text>looks good.</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="item">
                            <Card>
                                <Card.Img
                                    className="rounded"
                                    variant="top"
                                    src="https://previews.123rf.com/images/artemstepanov/artemstepanov1606/artemstepanov160600070/57844967-vector-visage-f%C3%A9minin-avatar-mod%C3%A8le-pictogramme-bouton-ic%C3%B4ne-plat-rond-%C3%A0-la-mode-avec-des-femmes-d-a.jpg?fj=1"
                                />
                                <Card.Body>
                                    <Card.Title>Jacks</Card.Title>
                                    <Card.Text>Quick and fast</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="item">
                            <Card>
                                <Card.Img
                                    className="rounded"
                                    variant="top"
                                    src="https://previews.123rf.com/images/artemstepanov/artemstepanov1606/artemstepanov160601046/57880420-vector-female-face-avatar-template-pictogram-button-round-trendy-flat-icon-with-women-for-business-i.jpg?fj=1"
                                />
                                <Card.Body>
                                    <Card.Title>Rina</Card.Title>
                                    <Card.Text>awesome</Card.Text>
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
