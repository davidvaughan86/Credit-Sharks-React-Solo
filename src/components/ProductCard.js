import React from 'react'

export default function photoCard (props) {
    return (
        <article className="productFrame" >
            <h4>{props.title}</h4>
            <p>{props.price}</p>
            <img src={props.url} alt={props.title}
            />

            
        </article>


    )
}