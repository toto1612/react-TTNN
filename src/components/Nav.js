import React from "react";

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav>
                <a href="index.html">Home</a>
                <div class="subnav-container">
                    <a href="#">World</a>
                    <div class="subnav-content">
                        <a href="#">Mexique</a>
                        <a href="#">Canada</a>
                        <a href="#">Italie</a>
                    </div>
                </div>
                <div class="subnav-container">
                <a href="#">France</a>
                    <div class="subnav-content">
                        <a href="#">Vannes</a>
                        <a href="#">Chamonix</a>
                        <a href="#">Paris</a>
                    </div>
                </div>
            </nav>
            
        )
    }
}