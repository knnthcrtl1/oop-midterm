import { useContext } from "react";
import { AppContext } from "../../engine/global/reducer";

const Checkout = () => {
  const { data } = useContext(AppContext);

  console.log("data =>", data);

  return <div>test checkout</div>;
};

export default Checkout;
