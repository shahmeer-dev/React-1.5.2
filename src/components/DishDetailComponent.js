import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: this.props.selectedDish
        }
    }
z
    renderDish(dish) {
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

    renderComments(dishComments) {
        return (
            <div>
                <h4>Comments</h4>
                {dishComments}
            </div>
        )
    }

    render() {
        const dishComments = this.props.selectedDish.comments.map((dish) => {
            return (
                <ul className="list-unstyled mb-3" key={dish.id}>
                    <li className="mb-3">{dish.comment}</li>
                    <li>-- {dish.author}, {dish.date}</li>
                </ul>
            )

        })

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dishComments)}
                </div>
            </div>
        )

    }
}

export default DishDetail;