import React, { Component } from 'react';
import Auxilliary from '../../../hoc/Auxilliary/Auxilliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component -- changed to use LifeCycle hooks (which weren't necessary for performance update)
    componentWillUpdate() {
        console.log('[Order Summary: Will Update]')
    }
    
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients) //in Object format
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}> {igKey} </span>: {this.props.ingredients[igKey]}
                </li>);
        } ); 
        
        return (
            <Auxilliary>
            <h3>Your Order</h3>
            <p>Your burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
            </Auxilliary>
        );
    }
}

export default OrderSummary;