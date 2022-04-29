import React from "react";
import { Card } from "react-bootstrap";

const CardItem = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src="https://media.istockphoto.com/photos/vegetables-and-fruit-with-heart-shape-as-concept-of-cardiovascular-picture-id1285827086?b=1&k=20&m=1285827086&s=170667a&w=0&h=e4riSWiqdS_Kz6ahp_QNF02N1sKD0FN6lFsNJzb98C8="
            />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    <strong className="d-block text-center">Stock: 45</strong>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex w-100 justify-content-between">
                <div className="btn btn-outline-primary">Order</div>
                <div className="btn btn-outline-primary">Update</div>
                <div className="btn btn-outline-primary">Delete</div>
            </Card.Footer>
        </Card>
    );
};

export default CardItem;
