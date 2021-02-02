import React from 'react'
import {useHistory} from 'react-router-dom'

export default function ThankYou () {

const history =useHistory()

    return (
        <div className="thanks">
            <h1> THANK YOU, YOUR EMAIL HAS BEEN RECEIVED</h1>
            <button oncClick={(e) => {
                
                history.push('/')
            }}
            >Home</button>
        </div>
    )
}
