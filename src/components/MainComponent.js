import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelected(dish) {
        this.setState({
            selectedDish: dish
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)} />
                <DishDetail dishDetails={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} dishSelected={this.state.selectedDish} />
                <Footer />
            </div>
        );
    }
}

export default Main;
