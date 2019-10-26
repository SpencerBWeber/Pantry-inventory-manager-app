import React, { Fragment } from "react";
import Form from "./Form";
import Inventory from "./Inventory";

const Dashboard = () => {
  return (
    <Fragment>
      <Form />
      <Inventory />
    </Fragment>
  );
};

export default Dashboard;
