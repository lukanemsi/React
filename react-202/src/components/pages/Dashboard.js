import React from "react";
import Card from "../elements/Card";
import BestSellers from "../elements/BestSellers";
import { artists, tableData,projects } from "../../data/data";
import Table from "../layout/Table";

const Dashboard = ({ cards }) => {
  return (
    <div>
      <div className="flex  justify-around width-100-p">
        <div className="width-50-p">
          <div>
            <h3>In the last 30 days,</h3>
            <div className="flex gap-50 align-center width-100-p">
              {cards.map((el,index) => (
                <Card card={el} key={index}/>
              ))}
            </div>
          </div>
        </div>
        <div >
        <BestSellers
          title={"Best-selling artists"}
          data={artists}
          button={"View all artists"}
        />
        </div>
      </div>

      <div className="flex  justify-around width-100-p mt-10">
          <div className="width-50-p">
              <Table headers={tableData.headers} data={tableData.data}/>
          </div>
          <div>
            <BestSellers title={"Best-selling projects"} data={projects} button={"View all projects"} />
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
