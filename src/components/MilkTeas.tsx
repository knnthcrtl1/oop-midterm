import { useState } from "react";
import { addOns, teaList, teaSizes } from "./list";
import "./milktea.css";
import OrderItem from "./OrderItem";
import { useNavigate } from "react-router-dom";

function MilkTeas() {
  let navigate = useNavigate();

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

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("please select tea size");
      return false;
    }

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

  const handleRemoveItem = (id: string) => {
    let orders = orderList.filter((item) => item.id !== id);

    setOrderList(orders);
  };

  const handleCheckOut = () => {
    navigate("/receipt");
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

            <button onClick={handleAddToCart}>Add to cart</button>
          </>
        )}
      </div>
      <div>
        <div>ORDERS:</div>
        <div>
          {orderList.map((item) => (
            <OrderItem
              key={item?.id}
              item={item}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
          {orderList.length !== 0 && (
            <button onClick={handleCheckOut}>Checkout</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MilkTeas;
