import React from 'react';
import './feed.css';
import photo from './testerphoto.jpeg'

function Feed() {
    return (
        <div> <span className="new">What's New</span>
            <div class="container">
                <div class="row align-items-start">
                        <div class="col">
                            <img src={photo} width="300px" height="300px" />
                        </div>
                        <div class="col">
                            <img src={photo} width="300px" height="300px" />
                        </div>
                        <div className = "col">
                            <img src={photo} width="300px" height="300px"/>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Feed;