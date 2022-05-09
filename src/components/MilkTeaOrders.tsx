import { teaSizes } from "./list";
import "./milktea.css";

type TeaProp = {
  item: any;
  handleOrderItem?: (e: number) => void;
};

const MilkTeaOrders = ({ item }: TeaProp) => {
  return (
    <div>
      <div className="tea__item">
        <div className="tea__item--row">
          <p
            className="tea__item--name"
            style={{ color: item?.isOrdered && "red" }}
          >
            {item?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MilkTeaOrders;
