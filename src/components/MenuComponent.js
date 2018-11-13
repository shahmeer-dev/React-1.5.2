import React, { Component } from 'react';
// import { Media } from 'reactstrap';
import {
  Card, CardImg, CardImgOverlay, CardTitle
} from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
  }

  onDishSelected(dish) {
    this.setState({ selectedDish: dish })
  }

  renderDish(dish) {
    // if (this.state.selectedDish != null) {
    //   return (
    //     <Card>
    //       <CardImg top src={dish.image} alt={dish.name} />
    //       <CardBody>
    //         <CardTitle>{dish.name}</CardTitle>
    //         <CardText>{dish.description}</CardText>
    //       </CardBody>
    //     </Card>
    //   )
    // } else {
    //   return <div></div>
    // }

    if (this.state.selectedDish != null) {
      return (
        <DishDetail selectedDish={this.state.selectedDish} />
      )
    } else {
      return <div></div>
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card
            onClick={() => this.onDishSelected(dish)}>

            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>

          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        {this.renderDish(this.state.selectedDish)}
      </div>
    );
  }
}

export default Menu;