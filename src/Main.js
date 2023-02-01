import { useState } from "react";
import './App.css';
import { data } from "./data";
import Goods from "./Goods";
import Buttons from "./Buttons";

function Main() {
    const [goods, setGoods] = useState(data);
    const choseGoods = (typeGoods) => {
        const filterGoods = data.filter(item =>
            item.typeGoods === typeGoods);
            setGoods(filterGoods);
    }

    return (
        <div>
            <div className="soloHeader">
                <h1 className="solo">Solo Showroom</h1>
            </div>
            <Buttons filteredGoods={choseGoods}/>
            <Goods newGoods={goods}/>
        </div>
    )
}

export default Main;