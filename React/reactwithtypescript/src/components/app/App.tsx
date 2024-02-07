import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message, { MessageDetails } from "../message/message.component";
import {
  MessageModel,
  Message_Functional,
} from "../message/message.functional";
import Counter from "../counter/counter";

// function App() {
//   //let messageOne: MessageModel = { msg: "Hello", from: "James", to: "Bond" };
//   let messages: MessageModel[] = [
//     { msg: "Bond James Bond", from: "James", to: "Bond" },
//     { msg: "Hey Pete", from: "Peter", to: "Parker" },
//   ];
//   return (
//     <div>
//       {messages.map(m => (
//         <Message_Functional messageDetails={m} />
//       ))}
//     </div>
//   );
// }

function App() {
  return <Counter />;
}
export default App;

// class App extends React.Component {
//   messages: MessageDetails[] = [
//     {
//       msg: "Hello",
//       from: "John",
//       to: "Carter",
//       imagesrc: "https://basicappleguy.com/s/HelloLight_Mac.png",
//     },
//     {
//       msg: "Hey",
//       from: "Peter",
//       to: "Parker",
//       imagesrc:
//         "https://www.shutterstock.com/image-vector/hey-text-speech-bubble-hi-260nw-2328471449.jpg",
//     },
//   ];
//   render() {
//     return (
//       <div className="row">
//         {this.messages.map(m => (
//           <Message messageDetails={m} />
//         ))}
//       </div>
//     );
//   }
// }

// export default App;
