import { CSSRulePlugin } from "gsap/all";

const OrderButton = ({ setItems }) => {
  return (
    <div className="order_button_wrapper">
      <button
        type="button"
        onClick={() => {
          setItems("");
          localStorage.clear();

          const countEle = CSSRulePlugin.getRule(
            ".nav .nav_right p:nth-child(3)::after"
          );
          countEle.content = "'0'";

          alert("Order placed!");
        }}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default OrderButton;
