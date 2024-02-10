import React from "react";

type IconProps = {
  classes: string;
};

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return <i className={props.classes}></i>;
};

export default Icon;
