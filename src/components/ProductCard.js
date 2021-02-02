import React from 'react'
import {useHistory} from 'react-router-dom'

export default function ProductCard(props) {
    
    const history = useHistory()
    const handlecClick= () => {
        props.addToCart(props)
        history.push('/myCart')
    }

    return (
        <article className="productFrame" >
            <h4>{props.title}</h4>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <img src={props.url} alt={props.title} onClick={(e) => {
                handlecClick()
            }}
            />

            
        </article>


    )
}

 
 