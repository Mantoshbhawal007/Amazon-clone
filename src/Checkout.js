import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import CheckoutProduct from "./CheckoutProduct";
// import Subtotal from "./Subtototal";

function Checkout() {
    const[{basket,user}]=useStateValue();
    return (
        <div className="checkout">
        <div className="checkout_left">
        <img className="checkout_ad" 
        src="https://gos3.ibcdn.com/top-1568020025.jpg"
        alt=""
        />
        {basket?.length ===0 ?(
            <div>
                <h2>oops your Shopping Basket is empty <SentimentVeryDissatisfiedIcon/> </h2>
                <p>
                    You have no items in our basket.To buy one or more items,
                    click "on cart icon" next to the item.
                </p>
            </div>
        ): (
            <div>
            <h3> hello, { user?.email}</h3>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket?.map(item =>(
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}

            />
            ))}
            
            </div>
        )
        }
        </div>
            {basket.length>0 &&(
                <div className="checkout_right">
                 
            
                </div>
            )}
        </div>
    );
}

export default Checkout
