import React from 'react'
import ReactPlayer from 'react-player'
import logo from './CSlogo.png'
import {Link} from 'react-router-dom'


export default function landingPage (){
    return (
        // <div className="landingPage">
            
            
           
                <div className="player-wrapper">
                    
                    <img src ={logo} alt='logo' width = '100%' top ='80%'
                    
                    />
                    <h6>WE ATTACK BAD CREDIT</h6>
                    
                    <Link to={'/registration'}>
                                    <span class="example_f" 
                                            align="center" 
                                            >
                                
                                            YES I WANT FINANCIAL FREEDOM 
                                    </span>
                            
                                
                                </Link>
                        <ReactPlayer
                        url = 'https://www.youtube.com/watch?v=54ynZ6p8nR4&feature=youtu.be' 
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


