import { items } from "./items/items";
import { CSSRulePlugin } from "gsap/all";
import { connect } from "react-redux";
import { addItem } from "../store/actions/actions";

const TrendingPage = ({ cartItems, dispatch }) => {
  const countEle = CSSRulePlugin.getRule(
    ".nav .nav_right p:nth-child(3)::after"
  );

  const addItemHandler = (id, name, price, img) => {
    dispatch(addItem(id, name, price, img));
  };

  countEle.content = `'${cartItems ? cartItems.length : 0}'`;

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
              addItemHandler(item.id, item.item_name, item.price, item.img);
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

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(TrendingPage);
