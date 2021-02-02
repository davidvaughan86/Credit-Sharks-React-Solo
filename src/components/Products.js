import React from 'react'
import ProductCard from './ProductCard'
import {Link} from 'react-router-dom'

const productData = [
    {
        url: '/BetaShark.png',
        title: 'Credit Sharks - Beta Course!',
        price: '$0',
        description: 'coming soon'
    }, {
        url: '/ConsultationShark.png',
        title: 'Free Consultation - Contact Us Today!',
        price: '$0',
        

        
    },{
        url: '/WhaleShark.png',
        title: 'Whale Shark Payment Plan Package - $79 to Start Today!',
        price: '$79.00',
        description: 'Monthly Subscription - This program covers Bankruptcies, Evictions, Repos, Credit Cards, Loans, Medical Bills, Hard Inquires, and Collection Accounts.'
        
    },{
        url: '/HammerheadShark.png',
        title: 'Hammerhead Credit Repair Package!',
        price: '$199.00',
        description: 'In this program we Attack hard inquiries'
    },{
        url: '/BlueChexShark.png',
        title: 'Bull Chex System Sweep',
        price: '$399.00',
        description: 'We will attack inaccurate information reported to Chex Systems.'
    },{
        url: '/BlueShark.png',
        title: 'Blue Shark Credit Repair Package!',
        price: '$499.00',
        description: 'In this program we Attack: Up to 5 Inquires, late payments, collections, and charge offs.'
    },{
        url: '/GreatWhiteShark.png',
        title: 'Great White Credit Repair Package',
        price: '$1099.00',
        description: 'This Program covers Bankruptcies, Evictions, Repos, Credit Cards, loans, Medical bills, Hard Inquiries and Collection Accounts.  '
    },
]



export default function products (props) {
    return (
        <div className="productPage">
           
            <div className="products">
            <Link to={'/email'}>
                    <span class="leadsButton" 
                    
                    >
                        Learn More
                    </span>
            </Link>
                <h1>All Products</h1>
                {
                    productData.map(i => <ProductCard 
                        title={i.title} 
                        price={i.price}
                        description={i.description}
                        addToCart={props.addToCart}
                        url={i.url}/>)
                        
                        
                }
            </div>
                
        </div>
    )
}
