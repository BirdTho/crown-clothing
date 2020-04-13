import React from 'react';
import StripeCheckout, {Token} from 'react-stripe-checkout';

interface Props {
  price: number
}

export const StripeCheckoutButton = ({ price }: Props) => {
  const priceForStripe = Math.floor(price * 100);
  const publishableKey = 'pk_test_jg8VNTtjYdbhV9uQLHulootW006ynfS7nG';

  const onToken = (token: Token) => {
    console.log(token);
    alert('Payment successful');
  };
  
  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price.toFixed(2)}`}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      amount={priceForStripe}/>
  )
};