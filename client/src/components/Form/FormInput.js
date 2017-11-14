import React from "react";

export const FormInput = props =>
  <div className="form-group">
  	<label>{props.dataname}</label>
    <input className="form-control" {...props} />
  </div>;
