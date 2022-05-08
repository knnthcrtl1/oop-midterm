import React from "react";
import { teaList } from "./list";

function MilkTeas() {
  return (
    <div>
      {teaList.map((tea) => (
        <div key={tea?.id}>
          <p>{tea?.name}</p>
        </div>
      ))}
    </div>
  );
}

export default MilkTeas;
