import OrderButton from "./OrderButton";
import { connect } from "react-redux";
import { CSSRulePlugin } from "gsap/all";
import { removeItem } from "../store/actions/actions";
import { getTotal } from "../store/reducers/reducers";

const Cart = ({ items, dispatch }) => {
  const countEle = CSSRulePlugin.getRule(
    ".nav .nav_right p:nth-child(3)::after"
  );

  countEle.content = `'${items?.length}'`;

  const onItemRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart_wrapper">
      <div className="cart_inner">
        {items.length > 0 ? (
          items.map((item, i) => (
            <div className="cart_item" key={i}>
              <div className="img_wrapper">
                <img src={item.img} alt="" />
              </div>
              <div className="item_row">
                <h5>{item.item_name}</h5>
                <p>Rs. {item.price}</p>
              </div>
              <div>
                <button
                  className="remove_button"
                  onClick={(e) => {
                    e.preventDefault();
                    onItemRemove(item.id);
                  }}
                >
                  remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your basket is empty.</p>
        )}
      </div>
      <div className="total">
        <strong>TOTAL</strong>- Rs. {getTotal(items)}
      </div>
      <OrderButton />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
  };
};

export default connect(mapStateToProps)(Cart);
