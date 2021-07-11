import { useEffect, useState } from "react";
import OrderButton from "./OrderButton";

const Cart = () => {
  const [items, setItems] = useState(0);
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items")));
  }, []);

  let TOTAL = 0;
  if (items) {
    items.forEach((item) => {
      TOTAL += item.price;
    });
  } else {
    TOTAL = 0;
  }

  return (
    <div className="cart_wrapper">
      <div className="cart_inner">
        {items
          ? items.map((item, i) => (
              <div className="cart_item" key={i}>
                <div className="item_row">
                  <h5>{i}</h5>
                  <h5>{item.name}</h5>
                  <p>{item.price}</p>
                </div>
              </div>
            ))
          : "No items in cart."}
      </div>
      <div className="total">
        <strong>TOTAL</strong>- Rs. {TOTAL}
      </div>
      <OrderButton setItems={setItems} />
    </div>
  );
};

export default Cart;
