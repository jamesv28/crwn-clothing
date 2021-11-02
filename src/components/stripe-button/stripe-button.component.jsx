import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const purblishKey = 'pk_test_CXAWk43rxhyqtLdb4STee1Ob';

    const onToken = token => {
        console.log(token)
        alert("Payment Succesfull")
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="Crown Clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total price is: $${price}`}
            amount={priceForStripe}
            panelLabel="pay Now"
            token={onToken}
            stripeKey={purblishKey}
        />
    )
}

export default StripeCheckoutButton;