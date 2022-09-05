import React, { useState } from 'react';

export class Galleryimg extends React.Component {
    constructor(props) {
        super(props);
        this.colorfunction = this.colorfunction.bind(this);
        this.state = {
            isHoverded: true
        }
    }

    
    colorfunction(event) {
        /*
        let listImg = document.getElementsByClassName("image");
        const imgId = event.currentTarget.id;
        for (let i=1 ; listImg.length ; i++) {
            if (listImg[i] !== imgId) {
                listImg[i].style.display = "none"
            } else {
                listImg[i].style.width = "100%"
            };
        };
        this.width = "100%";
        */
       this.setState({isHoverded: false});
       event.currentTarget.style.width = "100%";
       event.currentTarget.style.position = "absolute";
       event.currentTarget.style.zIndex = "1";
       event.currentTarget.style.backgroundColor = "white";
       event.currentTarget.style.top = "200px";
       event.currentTarget.style.height = "auto";
       event.currentTarget.children[0].style.width = "100%";
       event.currentTarget.children[0].style.height = "500px";
       event.currentTarget.children[1].style.opacity = "1";
       event.currentTarget.children[1].style.fontSize = "120px";
       event.currentTarget.children[1].style.top = "55%";
       event.currentTarget.children[2].style.display = "block";
       
       /*
       for (const child of event.currentTarget.children) {
        child.style.width = "100%";
       };*/
       
    };

    render() {

        const { isHoverded } = this.state;  

        return (
            <div class="gal-body">
                <div class="gallery-body">
                    <div class="gallery-container">
                    <div className={ isHoverded ? "img-container img-container-hover" : "img-container"} onClick={this.colorfunction}>
                        <img class="image" id="mex-img" src="./ressources/img/Vannes/Ruault/Vue.jpg" alt="" />
                        <div class="villemiddle">
                            <p>Mexique</p>
                        </div>
                        <div className='text-img'>
                            <p>tttttttttttttttttttttt</p>
                            <p>tttttttttttttttttttttt</p>
                            <p>tttttttttttttttttttttt</p>
                            <p>tttttttttttttttttttttt</p>
                            <p>tttttttttttttttttttttt</p>
                            <p>tttttttttttttttttttttt</p>
                            <p>tttttttttttttttttttttt</p>
                            <p>tttttttttttttttttttttt</p>
                            <p>tttttttttttttttttttttt</p>
                        </div>
                    </div>

                    <div className={ isHoverded ? "img-container img-container-hover" : "img-container"} onClick={this.colorfunction}>
                        <img class="image" src="./ressources/img/gallery/landscape/dusty-TcG-GUh-Br8-unsplash.jpg" alt=""/>
                        <div class="villemiddle">
                            <p>Mexique</p>
                        </div>
                        <div className='text-img'>
                            <div class = "article-container">
                                <h1>Vannes</h1>
                                <h2>Du 24 septembre au 26 septembre</h2>
                                <h3>3 jours</h3>

                                <div class="liste-villes">
                                    <ul>
                                        <li>Pointe du Ruault</li>
                                        <li><a href="#ile-aux-moines">L'île-aux-Moines *</a></li>
                                        <li>Carnac</li>
                                        <li>Vannes</li>
                                        <li>Quiberon</li>
                                        <li>Saint-Laurent</li>
                                        <li>Auray</li>
                                    </ul>
                                </div>

                                <div class="itineraire">
                                    <p>Comment s'y rendre ?</p>
                                    <p>En TGV : 2h30 depuis Paris Montparnasse,</p>
                                    <p>puis location d'une voiture à la gare de Vannes pour pouvoir se déplacer dans le Golfe du Morbihan.</p>
                                </div>

                                <div id="pointe-du-ruault">
                                    <h4>Pointe du Ruault</h4>
                                    <p>À peine arrivés à la gare, nous récupérons la voiture et direction la Pointe-du-Ruault pour une dégustation d'huîtres et de fruits de mer.</p>
                                    <div class="trois-photos">
                                        <div class="deux-photos">
                                            <img src="ressources/img/Vannes/Ruault/menu.JPG" id="img-ruault-menu"/>
                                            <img src="ressources/img/Vannes/Ruault/selfie.JPG" id="img-ruault-selfie"/>
                                        </div>
                                        <img src="ressources/img/Vannes/Ruault/vue.JPG" id="img-ruault-vue"/>
                                    </div>
                                    <div class="recommendations">
                                        <p>Nos recommendations</p>
                                        <ul>
                                            <li>Cabane à Huîtres et fruits de mer : "Les viviers du Ruault"</li>
                                        </ul>
                                    </div>
                                </div>

                            <div id="ile-aux-moines">
                                <h4>L'île-aux-moines</h4>
                                <p>Nous nous rendons à Port Blanc pour embarquer sur le ferry qui dessert l'île-aux-Moines.</p>
                                <p>Premier arrêt dans une crêperie pour prendre des forces avant de faire le tour de l'île.</p>
                                <div class="trois-photos">
                                    <div class="deux-photos">
                                        <img src="ressources/img/Vannes/ile-aux-moines/crepe.JPEG" id="img-ruault-menu"/>
                                        <img src="ressources/img/Vannes/ile-aux-moines/maison.JPEG" id="img-ruault-selfie"/>
                                    </div>
                                    <img src="ressources/img/Vannes/ile-aux-moines/baie.JPEG" id="img-ruault-vue"/>
                                </div>
                            </div>

                            
                        </div>
                        </div>
                    </div>

                    <div className={ isHoverded ? "img-container img-container-hover" : "img-container"} onClick={this.colorfunction}>
                        <img class="image" src="./ressources/img/gallery/landscape/karthik-sreenivas-1cTNbip1_qw-unsplash.jpg" alt=""/>
                        <div class="villemiddle">
                            <p>Mexique</p>
                        </div>
                    </div>
                    <div className={ isHoverded ? "img-container img-container-hover" : "img-container"} onClick={this.colorfunction}>
                        <img class="image" src="./ressources/img/gallery/landscape/michail-dementiev-6qVcFc1r7WU-unsplash.jpg" alt=""/>
                        <div class="villemiddle">
                            <p>Mexique</p>
                        </div>
                    </div>
                    <div className={ isHoverded ? "img-container img-container-hover" : "img-container"} onClick={this.colorfunction}>
                        <img class="image" src="./ressources/img/gallery/landscape/moises-ferreira-gJo0cl1zCBI-unsplash.jpg" alt=""/>
                        <div class="villemiddle">
                            <p>Mexique</p>
                        </div>
                    </div>
                    <div className={ isHoverded ? "img-container img-container-hover" : "img-container"} onClick={this.colorfunction}>
                        <img class="image" src="./ressources/img/gallery/landscape/nicolas-houdayer-wkPHrMu24ms-unsplash.jpg" alt=""/>
                        <div class="villemiddle">
                            <p>Mexique</p>
                        </div>
                    </div>
                    <div className={ isHoverded ? "img-container img-container-hover" : "img-container"} onClick={this.colorfunction}>
                        <img class="image" src="./ressources/img/gallery/landscape/ruben-M5hYB8ymqvc-unsplash.jpg" alt=""/>
                        <div class="villemiddle">
                            <p>Mexique</p>
                        </div>
                    </div>
                    <div className={ isHoverded ? "img-container img-container-hover" : "img-container"} onClick={this.colorfunction}>
                        <img class="image" src="./ressources/img/gallery/landscape/ryan-ancill-DmwHIIAm4fk-unsplash.jpg" alt=""/>
                        <div class="villemiddle">
                            <p>Mexique</p>
                        </div>
                    </div>
                    <div className={ isHoverded ? "img-container img-container-hover" : "img-container"} onClick={this.colorfunction}>
                        <img class="image" src="./ressources/img/gallery/landscape/ryan-ancill-FeHrTmsoP0M-unsplash.jpg" alt=""/>
                        <div class="villemiddle">
                            <p>Mexique</p>
                        </div>
                    </div>
                    <div className={ isHoverded ? "img-container img-container-hover" : "img-container"} onClick={this.colorfunction}>
                        <img class="image" src="./ressources/img/gallery/landscape/s-tsuchiya-rE87Px3JbUY-unsplash.jpg" alt=""/>
                        <div class="villemiddle">
                            <p>Mexique</p>
                        </div>
                    </div>

    
          

                    </div>
                </div>
            </div>
        )
    }
}

/*

          
*/