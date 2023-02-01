function Buttons({filteredGoods}) {
    return (
        <div className="btnMain">
            <button className="btn" onClick={() => filteredGoods("jacket")}>ВЕРХНЯЯ ОДЕЖДА</button>
            <button className="btn" onClick={() => filteredGoods("dress")}>ВЕЧЕРНИЕ ПЛАТЬЯ</button>
            <button className="btn" onClick={() => filteredGoods("accessories")}>АКСЕССУАРЫ</button>
            <button className="btn" onClick={() => filteredGoods("shoes")}>ОБУВЬ</button>
        </div>
    )
}

export default Buttons;