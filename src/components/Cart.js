import OrderButton from "./OrderButton";
import { connect } from "react-redux";
import { getTotal } from "../store/actions/actions";
import { useEffect } from "react";

const Cart = ({ items, total, dispatch }) => {
  useEffect(() => {
    let amt = 0;

    items.map((item) => (amt += item.price));
    dispatch(getTotal(amt));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="cart_wrapper">
      <div className="cart_inner">
        {items ? (
          items.map((item, i) => (
            <div className="cart_item" key={i}>
              <div className="img_wrapper">
                <img src={item.img} alt="" />
              </div>
              <div className="item_row">
                <h5>{item.item_name}</h5>
                <p>Rs. {item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>"No items in cart."</p>
        )}
      </div>
      <div className="total">
        <strong>TOTAL</strong>- Rs. {total}
      </div>
      <OrderButton />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
    total: state.total,
  };
};

export default connect(mapStateToProps)(Cart);
