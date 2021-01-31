import React from 'react'
import ReactPlayer from 'react-player'
import logo from '../images/CSlogo.png'



export default function landingPage (){
    return (
        // <div className="landingPage">
            
            
           
                <div className="player-wrapper">
                    
                    <img src ={logo} alt='logo' width = '100%' top ='80%'
                    
                    />
                    <h6>WE ATTACK BAD CREDIT</h6>
                    <div class="button_cont" 
                            align="center">
                            <a 
                            class="example_f" 
                            href="add-website-here" 
                            target="_blank" 
                            rel="nofollow"
                            >
                        <span>
                            YES I WANT FINANCIAL FREEDOM
                        </span>
                        </a>
                    </div>
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


