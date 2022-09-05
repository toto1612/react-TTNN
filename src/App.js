import './App.css';
import {Navbar} from './components/Nav.js';
import {Galleryimg} from './components/GalleryImg.js';
import React from 'react';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Navbar />
                <Galleryimg />
            </div>
        )
    }
}






