import "./App.css";
import React from "react";
import picture from "./77.jpg";

function Contact() {

    return (
        <div>
            <div className="soloHeader">
                <h1 className="solo">Solo Showroom</h1>
            </div>
            <div className="contactMain">
                <div className="contAdress">
                    <div>
                        <h3 className="headerCont">НАШ АДРЕС:</h3>
                    </div>
                    <div>
                        <h4 className="adress">г.Москва ул. Брусничная дом 85, стр. 2</h4>
                    </div>
                    <div>
                        <h3 className="headerCont">ТЕЛЕФОН:</h3>
                    </div>
                    <div>
                        <h4 className="adress">8 (495) 777 77 77</h4>
                    </div>
                </div>
                <div>
                    <img className="picSizaCont" src={picture} width="400px" height="500px" alt="pic"/>
                </div>
            </div>
        </div>
    )
}

export default Contact;