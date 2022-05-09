import { useCallback, useState } from "react";
import { addOns, teaList, teaSizes } from "./list";
import "./milktea.css";
// import MilkTeaItem from "./MilkTeaItem";

function MilkTeas() {
  const [selectedTea, setSelectedTea] = useState<any>();
  const [selectedSize, setSize] = useState<any>();
  const [addOn, setAddOns] = useState<any>();
  const [orderList, setOrderList] = useState<any[]>([]);
  const [list, setList] = useState<any[]>(teaList);

  let newOrders: any = [];

  const handleOrderItem = (e: any) => {
    setSelectedTea(e.target.value);
  };

  const handleSetSize = (id: string) => {
    console.log(id, selectedSize);
    if (id === selectedSize) {
      setSize("");
      return false;
    }
    setSize(id);
  };

  const handleAddOns = (id: string) => {
    if (id === addOn) {
      setAddOns("");
      return false;
    }
    setAddOns(id);
  };

  const testList = () => {
    let orderObj = {
      id: Date.now(),
      tea: selectedTea,
      size: selectedSize,
      addOn,
    };

    setOrderList([...orderList, orderObj]);

    console.log(orderList);
    clearFields();

    // console.log("tea list =>", newOrders);
  };

  const clearFields = () => {
    setSelectedTea("");
    setSize("");
    setAddOns("");
  };

  return (
    <div className="list__item">
      <div>
        <select onChange={handleOrderItem}>
          <option></option>
          {list.map((item) => (
            <option value={item?.id} key={item?.id}>
              {item?.name}
            </option>
          ))}
        </select>
        {selectedTea && (
          <>
            <div className="tea__sizes">
              Sizes:{" "}
              {teaSizes.map((size) => (
                <p
                  style={{
                    backgroundColor:
                      size?.id === selectedSize ? "red" : "transparent",
                  }}
                  key={size?.id}
                  onClick={() => handleSetSize(size?.id)}
                >
                  {size.name}
                </p>
              ))}
            </div>
            <div className="tea__sizes">
              Sizes:{" "}
              {addOns.map((add) => (
                <p
                  style={{
                    backgroundColor: add?.id === addOn ? "red" : "transparent",
                  }}
                  key={add?.id}
                  onClick={() => handleAddOns(add?.id)}
                >
                  {add.name}
                </p>
              ))}
            </div>
            <button onClick={testList}>Add to cart</button>
          </>
        )}
      </div>
      <div>
        <div>ORDERS:</div>
        <div>
          {orderList.map((item) => (
            <p key={item?.id}>{item?.tea}</p>
          ))}
        </div>
      </div>
      <div>test</div>
    </div>
  );
}

export default MilkTeas;
