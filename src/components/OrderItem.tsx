import { useState } from "react";
import { addOns, teaList, teaSizes } from "./list";
import "./milktea.css";

const OrderItem = ({ item, handleRemoveItem }: any) => {
  //   const [teaName, setTeaName] = useState<any>("");

  const getItemName = (): any => {
    let name = "";
    teaList.filter((val) => {
      if (val.id === item?.tea) {
        name = val.name;
      }
    });
    return name;
  };

  const getSizeName = () => {
    let name = "";
    teaSizes.filter((val) => {
      if (val.id === item?.size) {
        name = val.name;
      }
    });
    return name;
  };

  const getAddOn = () => {
    let name = "";
    addOns.filter((val) => {
      if (val.id === item?.addOn) {
        name = val.name;
      }
    });
    return name;
  };

  const formatTea = () => {
    return `${getItemName()} - (${getSizeName()}) - ${getAddOn()}`;
  };

  return (
    <div className="order__item">
      <p>{formatTea()}</p>
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
