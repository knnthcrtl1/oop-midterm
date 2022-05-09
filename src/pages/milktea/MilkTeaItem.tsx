// import { teaSizes } from "./list";
import "./milktea.css";

type TeaProp = {
  item: any;
  handleOrderItem: (e: string) => void;
};

const MilkTeaItem = ({ item, handleOrderItem }: TeaProp) => {
  return (
    <div>
      <div className="tea__item">
        <div className="tea__item--row" onClick={() => handleOrderItem(item)}>
          {/* <div
            className="team__item--checkbox"
            style={{ background: item?.isOrdered && "black" }}
          /> */}
          {/* <input
            type="checkbox"
            onClick={() => handleOrderItem(item?.id)}
            defaultChecked={item?.isOrdered ? true : false}
          /> */}
          <p
            className="tea__item--name"
            style={{ color: item?.isOrdered && "red" }}
          >
            {item?.name}
          </p>
        </div>
        {/* <input
          type="number"
          className="tea__item--input-number"
          min="1"
          max="99"
        /> */}
      </div>
      {/* <div className="tea__sizes">
        Sizes:{" "}
        {teaSizes.map((size) => (
          <p key={size?.id}>{size.name}</p>
        ))}
      </div>
      <div className="tea__sizes">Add Ons: TEST | TEST | TEST </div> */}
    </div>
  );
};

export default MilkTeaItem;
