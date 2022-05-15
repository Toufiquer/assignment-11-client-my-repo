import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const LatestOrder = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 py-4 display-4">Our Latest Order</div>
                <div className="col-12 col-md-4 mx-auto">
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://cdn.britannica.com/06/75906-050-16A53398/mango-fruits.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Fresh Mango</Card.Title>
                            <Card.Text>
                                mango, (Mangifera indica), member of the cashew
                                family (Anacardiaceae) and one of the most
                                important and widely cultivated fruits of the
                                tropical world. The mango tree is considered
                                indigenous to southern Asia, especially Myanmar
                                and Assam state of India, and numerous cultivars
                                have been developed. Mangoes are a rich source
                                of vitamins A, C, and D.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                Orders by: Toufiquer Rahman
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
                <div className="col-12 col-md-4 mx-auto">
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://cdn.britannica.com/69/137369-050-F1D9393A/Cranberries.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Fresh berry</Card.Title>
                            <Card.Text>
                                berry, in botany, a simple fleshy fruit that
                                usually has many seeds, such as the banana,
                                grape, and tomato. As a simple fruit, a berry is
                                derived from a single ovary of an individual
                                flower. The middle and inner layers of the fruit
                                wall often are not distinct from each other.
                                Together with drupes and pomes, berries are one
                                of the main types of fleshy fruits.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                Orders by: Toufiquer Rahman
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
                <div className="col-12 col-md-4 mx-auto">
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://cdn.britannica.com/31/157531-050-25D8087E/Papaya-fruit.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Fresh papaya</Card.Title>
                            <Card.Text>
                                papaya, (Carica papaya), also called papaw or
                                pawpaw, succulent fruit of a large plant of the
                                family Caricaceae. Though its origin is rather
                                obscure, the papaya may represent the fusion of
                                two or more species of Carica native to Mexico
                                and Central America. Today it is cultivated
                                throughout the tropical world and into the
                                warmest parts of the subtropics. The papaya
                                fruit is slightly sweet, with an agreeable musky
                                tang, which is more pronounced in some varieties
                                and in some climates than in others. It is a
                                popular breakfast fruit in many countries and is
                                also used in salads, pies, sherbets, juices, and
                                confections. The unripe fruit can be cooked like
                                squash.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                Orders by: Toufiquer Rahman
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default LatestOrder;
