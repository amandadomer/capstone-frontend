import React from 'react';
import './feed.css';
import photo from './testerphoto.jpeg'

function Feed() {
    return (
        <div><h1>what's new</h1>
            <div class="container">
                <div class="row align-items-start">
                        <div class="col">
                            <img src={photo} width="300px" height="300px" />
                        </div>
                        <div class="col">
                            <img src={photo} width="300px" height="300px" />
                        </div>
                    <div class="col">
                    <img src={photo} width="300px" height="300px" />
                    </div>
                </div>
            <div class="row align-items-center">
                <div class="col">
                    <img src={photo} width="300px" height="300px" />
                </div>
                <div class="col">
                    <img src={photo} width="300px" height="300px" />
                </div>
                <div class="col">
                    <img src={photo} width="300px" height="300px" />
                </div>
            </div>
            <div class="row align-items-end">
                <div class="col">
                    <img src={photo} width="300px" height="300px" />
                </div>
                <div class="col">
                    <img src={photo} width="300px" height="300px" />
                </div>
                <div class="col">
                    <img src={photo} width="300px" height="300px" />
                </div>
            </div>
            </div>        
        </div>
    )
}

export default Feed;