import React from 'react'
import {BrowserRouter as Router, useHistory} from 'react-router-dom'

export default function MyCart (props) {
    const history = useHistory();

    
    
    return (
        
            <div className="checkOutContainer">
                <div className="productCheckOut">
                    <img src={props.cart[0].url} alt={props.cart[0].title}/>
                    <div className="checkoutInfo">
                        
                        
                        <div>
                            <h4>{props.cart[0].title}</h4>
                            <br/>
                            <h3>{props.cart[0].price}</h3>
                            
                            
                        </div>
                        

                        <div className="stripe">
                            <button type="button" 
                            onClick={(e) => {
                                history.push('/checkout')
                            }}
                            role="link"
                            >
                                Go To Check Out
                            </button>
                            <h4>{props.cart[0].description}</h4>

                        </div>
                    </div>

                </div>
            </div>




    )



}