import { formatTea } from "../../utils/milktea";
import "./milktea.css";

const OrderItem = ({ item, handleRemoveItem }: any) => {
  return (
    <div className="order__item">
      <p>{formatTea(item)}</p>
      <p
        className="order__item--remove"
        onClick={() => handleRemoveItem(item?.id)}
      >
        X
      </p>
    </div>
  );
};

export default OrderItem;
