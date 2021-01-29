import React from 'react'
import ReactPlayer from 'react-player'
import logo from '../CSlogo.png'


export default function landingPage (){
    return (
        <div className="landingPage">
            
            <h1> Credit Sharks LLC</h1>
           
                <div className="landingPageContainer" max-width='200%'>
                    <img src ={logo} alt='logo' width = '150%'
                    
                    />
                    <div className="youtube">
                        <ReactPlayer
                        url = 'https://www.youtube.com/watch?v=rMeXmFkwLHs'
                        >
                            Credit Repair
                        </ReactPlayer>
                    </div>
                </div>
        </div>
        
        
    )
}


