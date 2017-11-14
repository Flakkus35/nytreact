import React from "react";

export const RemoveBtn = props =>
  <button {...props} style={{ float: "right" }} className="btn btn-danger">
    {props.children}
  </button>;
