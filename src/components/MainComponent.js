import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        }
    }

    onDishSelected(dish) {
        this.setState({
            selectedDish: dish
        })
    }

    render() {
        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dish={this.state.dishes.filter((dish) => dish.id == match.params.dishId)[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId == match.params.dishId)[0]}
                />
            )
        }

        const HomePage = () => {
            return (
                <Home
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)} />
                    } />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    {/* <Route path="/about" component={ContactComponent} /> */}

                    <Route exact path="/contact" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
                {/* <DishDetail dishDetails={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} dishSelected={this.state.selectedDish} /> */}
            </div>
        );
    }
}

export default Main;
