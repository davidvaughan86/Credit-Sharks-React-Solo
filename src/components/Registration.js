import React from 'react'
import {useState} from 'react'
import '../App.css'
import { Redirect, Link} from 'react-router-dom'


export default function Registration (props) {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAdress, setEmailAdress] = useState('')
    const [phone, setPhone] = useState('')
    const [comments, setComments] = useState('')

    console.log(name)

    return (
        <div className="container">
            <div className="leadsForm">
                <section >
                {/* <h1>Learn More
                    _____________________
                    "We Attack Bad Credit"
                </h1> */}
                <form className="form"
                onSubmit= {(e) => {
                    e.preventDefault()
                    return <Redirect to={'/packages'} />
                    // props.onSubmit(leadsObject)
                    // setName('')
                    // setLastName('')
                    // setEmailAdress('')
                    // setPhone('')
                    // setComments('')
                    
                }}>
                    <div className="inputContainer">
                    <label>
                        <p>Name:</p>
                        
                        <input
                        placeholder ="please enter your name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        
                        />
                    </label>
                    </div>
                    <div className="inputContainer">
                    <label>
                        <p>Last Name:</p>

                        <input
                        placeholder ="please enter your last name"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}
                        />
                    </label>
                    </div>
                   <div className="inputContainer">
                    <label>
                        <p>Email:</p>

                        <input
                        placeholder ="please enter your email"
                        value={emailAdress}
                        onChange={(e) => {
                            setEmailAdress(e.target.value)
                        }}
                        />
                    </label>
                    </div>
                    <div className="inputContainer">
                    <label>
                        <p>Phone:</p>

                        <input
                        placeholder ="please enter your phone number"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value)
                        }}
                        />
                    </label>
                    </div>
                    <div className="inputContainer">
                    
                    <label>
                        <p>Comments:</p>

                        <input
                        placeholder ="anything you'd like to add?(Optional)"
                        value={comments}
                        onChange={(e) => {
                            setComments(e.target.value)
                        }}
                        />
                    </label>
                    </div>
                    

                       
                    <Link to={'/packages'}>
                    <p>Submit and Choose Product</p>
                    </Link>
                    




                </form>
                    
                
                </section>       
            </div> 
        </div>          
        
    )
}