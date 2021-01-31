import React from 'react'
import {useState} from 'react'



export default function Registration (props) {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAdress, setEmailAdress] = useState('')
    const [phone, setPhone] = useState('')
    const [comments, setComments] = useState('')



    return (


        <section className="leadsForm">
            <h1>Learn More
                _____________________
                "We Attack Bad Credit"
            </h1>
            <form
            onSubmit= {(e) => {
                e.preventDefault()
                const leadsObject = {
                    name,
                    lastName,
                    emailAdress,
                    phone, 
                    comments,
                }
                props.onSubmit(leadsObject)
                setName('')
                setLastName('')
                setEmailAdress('')
                setPhone('')
                setComments('')
                
            }}>
                <label>
                    Name:

                    <input
                    placeholder ="please enter your name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    />
                </label>
                <label>
                    Last Name:

                    <input
                    placeholder ="please enter your last name"
                    value={lastName}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    />
                </label>
                <label>
                    Email:

                    <input
                    placeholder ="please enter your email"
                    value={emailAdress}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    />
                </label>
                <label>
                    Phone:

                    <input
                    placeholder ="please enter your phone number"
                    value={comments}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    />
                </label>
                <label>
                    Comments:

                    <input
                    placeholder ="anything you'd like to add?(Optional)"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    />
                </label>
                <input type = "submit"
                    value="Submit"

                    />

                  




            </form>
                
            


        </section>
    )
}