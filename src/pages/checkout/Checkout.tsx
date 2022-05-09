import { useContext, useState } from "react";
import { AppContext } from "../../engine/global/reducer";
import {
  formatPrice,
  formatTea,
  formatTeaPrice,
  formatTotalPrice,
} from "../../utils/milktea";
import "./checkout.css";

const Checkout = () => {
  const { data } = useContext(AppContext);

  return (
    <div className="checkout__page">
      <div className="checkout__page--title">
        <div style={{ flex: 7, textAlign: "left" }}>Orders</div>
        <div style={{ flex: 1, textAlign: "right" }}>Quantity</div>
        <div style={{ flex: 3, textAlign: "right" }}>Price</div>
      </div>
      {data.length !== 0 &&
        data.map((val: any) => (
          <div className="checkout__page--content" key={val?.id}>
            <div style={{ flex: 7, textAlign: "left" }}>
              <p>{formatTea(val)}</p>
            </div>
            <div style={{ flex: 1, textAlign: "right" }}>1</div>
            <div style={{ flex: 3, textAlign: "right" }}>
              {formatPrice(formatTeaPrice(val))}
            </div>
          </div>
        ))}
      <div className="checkout__page--total">
        TOTAL: {formatTotalPrice(data && data)}
      </div>
    </div>
  );
};

export default Checkout;
