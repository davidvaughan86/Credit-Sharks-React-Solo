import React from 'react'
import ReactPlayer from 'react-player'
import logo from './CSlogo.png'


const landingpage = () => {
    return (
        <div className="header">
            <h1> Credit Sharks LLC</h1>
            <nav>
                <button className="navigation">
                    Menu
                </button>
            </nav>
                <div className="landingpage" max-width='200%'>
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

export default landingpage
