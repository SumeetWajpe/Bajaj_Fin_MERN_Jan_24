import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.messageDetails.imagesrc}
          alt={this.props.messageDetails.message}
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
