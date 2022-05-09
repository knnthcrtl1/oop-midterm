import { addOns, teaList, teaSizes } from "./list";
import "./milktea.css";

const OrderItem = ({ item, handleRemoveItem }: any) => {
  const getItemName = (): any => {
    let name = "";
    teaList.filter((val: any) => {
      if (val.id === item?.tea) {
        name = val.name;
      }
    });
    return name;
  };

  const getSizeName = () => {
    let name = "";
    teaSizes.filter((val: any) => {
      if (val.id === item?.size) {
        name = val.name;
      }
    });
    return name;
  };

  const getAddOn = () => {
    let name = "";
    addOns.filter((val: any) => {
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
