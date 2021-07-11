import { useState } from "react";
import { items } from "./items/items";
import { CSSRulePlugin } from "gsap/all";

const TrendingPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const countEle = CSSRulePlugin.getRule(
    ".nav .nav_right p:nth-child(3)::after"
  );

  const addItemHandler = (id, price, name, quantity) => {
    setCartItems([
      ...cartItems,
      {
        id: id,
        price: price,
        name: name,
        quantity: quantity,
      },
    ]);
  };
  localStorage.setItem("items", JSON.stringify(cartItems));

  countEle.content = `'${JSON.parse(localStorage.getItem("items")).length}'`;

  const trends = () => {
    return items.map((item) => (
      <div className="trend_item" key={item.id}>
        <div className="trend_img">
          <img src={item.img} alt={item.item_name} />
          <div className="item_price">Rs.{item.price}</div>
        </div>
        <div className="item_button">
          <button
            type="button"
            onClick={(e) => {
              addItemHandler(item.id, item.price, item.item_name, 1);
              e.preventDefault();
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="trend_page">
      <div className="trend_label">
        <h1>Today's Trends</h1>
      </div>
      <div className="trend_items">{trends()}</div>
    </div>
  );
};

export default TrendingPage;
