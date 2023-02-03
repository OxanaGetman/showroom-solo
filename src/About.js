import "./App.css";
import { useState } from "react";
import { dataSlides } from "./dataSlides";
import Text from "./Text";

function About() {
    const [photo, setPhoto] = useState(0);
    const {imageSlide} = dataSlides[photo];

    const nextBtn = () => {
        setPhoto ((photo => {
            photo++;
            if (photo > dataSlides.length-1) {
                photo=0;
            }
            return photo;
        }))
    }

    const prevBtn = () => {
        setPhoto ((photo => {
            photo--;
            if (photo <0) {
                return dataSlides.length-1;
            }
            return photo;
        }))
        
    }

    return (
        <div>
            <div className="soloHeader">
                <h1 className="solo">Solo Showroom</h1>
            </div>
            <div className="about">
                <div className="aboutSlide">
                    <div>
                        <img className="picSizeAbout" src={imageSlide} width="350px" height="450px" alt="ph"/>
                    </div>
                    <div>
                        <button className="btnSlide" onClick={prevBtn}>НАЗАД</button>
                        <button className="btnSlide" onClick={nextBtn}>ВПЕРЁД</button>
                    </div> 
                </div>
                <div className="aboutTextPlace">
                    <Text />
                </div>
            </div>
        </div>
    );
}

export default About;