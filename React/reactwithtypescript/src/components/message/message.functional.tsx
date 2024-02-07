import React from "react";

export type MessageModel = {
  msg: string;
  from: string;
  to: string;
};
type MessagePropsType = {
  messageDetails: MessageModel;
};
// best practise
export const Message_Functional: React.FC<MessagePropsType> = (
  props: MessagePropsType,
) => {
  return <h1> {props.messageDetails.msg} </h1>;
};

// export const Message_Functional = (props: MessagePropsType) => {
//   return <h1> {props.messageDetails.msg} </h1>;
// };
