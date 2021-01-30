import React from 'react'
import ReactPlayer from 'react-player'
import logo from '../images/CSlogo.png'



export default function landingPage (){
    return (
        // <div className="landingPage">
            
            
           
                <div className="player-wrapper">
                    
                    <img src ={logo} alt='logo' width = '100%' top ='80%'
                    
                    />
                    
                        <ReactPlayer
                        url = 'https://www.youtube.com/watch?v=rMeXmFkwLHs' 
                        className="react-player"
                        
                        width="100%"
                        height="100%"
                        controls={false}
                        >
                            Credit Repair
                        </ReactPlayer>
                    
                </div>
        // </div>
        
        
    )
}


