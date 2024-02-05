import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Message from "./message.component";

class App extends React.Component {
  // messageOne = {
  //   msg: "Hello",
  //   from: "John",
  //   to: "Carter",
  //   imagesrc: "https://basicappleguy.com/s/HelloLight_Mac.png",
  // };
  // messageTwo = {
  //   msg: "Hey",
  //   from: "Peter",
  //   to: "Parker",
  //   imagesrc:
  //     "https://www.shutterstock.com/image-vector/hey-text-speech-bubble-hi-260nw-2328471449.jpg",
  // };
  messages = [
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
      <div>
        {this.messages.map(m => (
          <Message messageDetails={m} />
        ))}
      </div>
    );
  }
}

export default App;
