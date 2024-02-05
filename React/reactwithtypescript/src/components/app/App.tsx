import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message, { MessageDetails } from "../message/message.component";

class App extends React.Component {
  messages: MessageDetails[] = [
    {
      msg: "Hello",
      from: "John",
      to: "Carter",
      imagesrc: "https://basicappleguy.com/s/HelloLight_Mac.png",
    },
    {
      msg: "Hey",
      from: "Peter",
      to: "Parker",
      imagesrc:
        "https://www.shutterstock.com/image-vector/hey-text-speech-bubble-hi-260nw-2328471449.jpg",
    },
  ];
  render() {
    return (
      <div className="row">
        {this.messages.map(m => (
          <Message messageDetails={m} />
        ))}
      </div>
    );
  }
}

export default App;
