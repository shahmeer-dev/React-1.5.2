import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

function RenderDish({dish}) {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

function RenderComments({dish}) {
    const dishComments = dish.comments.map((dish) => {
        return (
            <ul className="list-unstyled mb-3" key={dish.id}>
                <li className="mb-3">{dish.comment}</li>
                <li>-- {dish.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(dish.date)))}</li>
            </ul>
        )
    })

    return (
        <div>
            <h4>Comments</h4>
            {dishComments}
        </div>
    )
}

const DishDetail = (props) => {
    if (props.dishSelected !== null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dishDetails} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.dishDetails} />
                    </div>
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default DishDetail;