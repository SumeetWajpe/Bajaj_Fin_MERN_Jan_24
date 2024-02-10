import React from "react";

const Button = (props: any) => {
  return <button className="btn btn-success">{props.children}</button>;
};

export default Button;
