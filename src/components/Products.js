import React from 'react'
import ProductCard from './ProductCard'

const productData = [
    {
        url: '/BetaShark.png',
        title: 'Credit Sharks - Beta Course!',
        price: '$0'
    }, {
        url: '/ConsultationShark.png',
        title: 'Free Consultation - Contact Us Today!',
        price: '$0'
    },{
        url: '/WhaleShark.png',
        title: 'Whale Shark Payment Plan Package - $79 to Start Today!',
        price: '$79.00'
    },{
        url: '/HammerheadShark.png',
        title: 'Hammerhead Credit Repair Package!',
        price: '$199.00'
    },{
        url: '/BlueChexShark.png',
        title: 'Bull Chex System Sweep',
        price: '$399.00'
    },{
        url: '/BlueShark.png',
        title: 'Blue Shark Credit Repair Package!',
        price: '$499.00'
    },{
        url: '/GreatWhiteShark.png',
        title: 'Great White Credit Repair Package',
        price: '$1099.00'
    },
]





export default function products () {
    return (
        <div className="productPage">
            <div class="button_cont" 
                    align="center"><a class="leadsButton" 
                    href="" 
                    target="_blank" 
                    rel="nofollow noopener"
                    >
                        Learn More</a></div>
            <div className="products">
                
                <h1>All Products</h1>
                {
                    productData.map(i => <ProductCard 
                        title={i.title} 
                        price={i.price} 
                        url={i.url}/>)
                }
            </div>
                
        </div>
    )
}
