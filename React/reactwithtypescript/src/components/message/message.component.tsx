import React from "react";

export type MessageDetails = {
  msg: string;
  from: string;
  to: string;
  imagesrc: string;
};

type MessagePropsType = {
  messageDetails: MessageDetails;
};

class Message extends React.Component<MessagePropsType> {
  render(): React.ReactNode {
    return (
      <div className="col-md-3">
        <img
          src={this.props.messageDetails.imagesrc}
          alt={this.props.messageDetails.msg}
          height="100px"
          width="150px"
        />
        <h1>{this.props.messageDetails.msg}</h1>
        <h3>From : {this.props.messageDetails.from}</h3>
        <h3>To : {this.props.messageDetails.to}</h3>
      </div>
    );
  }
}
export default Message;
