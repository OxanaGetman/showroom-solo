import "./App.css";
import React from "react";
import { useState } from "react";

function Text() {
    const text = 'У нас в шоу-руме Вы сможете померить, пощупать, посмотреть, выбрать подходящий размер и купить понравившуюся вещь! В шоу-руме представлен полный ассортимент коллекции, поэтому Вам будет проще определиться в выборе вещи. Опытные продавцы, помогут Вам определиться в Вашем выборе... В шоу-руме представлены самые интересные (но далеко не все!) модели одежды и обуви из ассортимента нашего сайта. Их можно померить и купить без предварительного заказа. Цены в шоу-руме такие же как на нашем сайте. Актуальное наличие в шоу-руме можно посмотреть через наш сайте в режиме реального времени. Для этого выберите интересующую вас категорию товара.'
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="aboutTextPlace">
            <p className="textAbout">{showMore ? text : text .substring(0,170) + "..."}
                <button className="moreText" onClick={()=> setShowMore(!showMore)}>{showMore ? "скрыть" : "читать дальше"}</button>
            </p>
        </div>
    )
}

export default Text;