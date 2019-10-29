import React, { Fragment } from "react";
import Form from "./Form";
import Inventory from "./Inventory";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Inventory />
    </Fragment>
  );
}
