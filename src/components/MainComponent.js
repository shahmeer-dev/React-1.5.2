import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
// import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

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
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/menu" component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)} />
                    } />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
                {/* <DishDetail dishDetails={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} dishSelected={this.state.selectedDish} /> */}
            </div>
        );
    }
}

export default Main;
