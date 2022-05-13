import React, { useContext, useRef } from "react";
import { AppContext } from "../../engine/global/reducer";
import {
  formatPrice,
  formatTea,
  formatTeaPrice,
  formatTotalPrice,
} from "../../utils/milktea";
import "./checkout.css";
import { useReactToPrint } from "react-to-print";

const ComponentToPrint = React.forwardRef((props, ref: any) => {
  console.log(props, ref);
  const { data } = useContext(AppContext);

  return (
    <div className="checkout__page" ref={ref}>
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
});

const Checkout = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef?.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default Checkout;
