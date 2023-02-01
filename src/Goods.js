function Goods({newGoods}) {
    return (
        <div className="product">
            {newGoods.map((element => {
                const {price, name, image} = element;
                return (
                    <div className="photoPlace">
                        <img src={image} className="picSize" alt="ph" width="300px" height="400px"/>
                        <h3 className="textStyle">{name}</h3>
                        <p className="textStyle">{price}</p>
                    </div>
                )
            }))
            }
        </div>
    )
}

export default Goods;