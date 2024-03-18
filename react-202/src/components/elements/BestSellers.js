import React from "react";
import Creator from "./Creator";

const BestSellers = ({ title, data, button }) => {
  return <div className="text-center bg-light-gray p-20 br-5">
    <h3>{title}</h3>
    <div>
      {
        data.map((el,index) => {
         return <div className="flex gap-10">
          <Creator creator={el.creator}/>
          <p>{el.sales}</p>
          <p>{el.revenue}</p>
         </div>;
        })
      }
    </div>
    <button className="button-primary">{button}</button>
  </div>;
};

export default BestSellers;
