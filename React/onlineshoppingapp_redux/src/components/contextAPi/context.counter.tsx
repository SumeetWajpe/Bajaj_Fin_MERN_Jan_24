import React, { useContext, useState } from "react";
const CounterContext = React.createContext<any>({});

const GrandParent = () => {
  function ChangeCount() {
    setCount(++count);
  }
  let [count, setCount] = useState(1000);
  return (
    <div>
      Grand Parent :
      <CounterContext.Provider value={{ count, ChangeCount }}>
        <Parent />
      </CounterContext.Provider>
    </div>
  );
};

const Parent = () => {
  return (
    <div>
      Parent :
      <Child />
      <AnotherChild />
    </div>
  );
};

const Child = () => {
  const curr_Count = useContext(CounterContext);
  return (
    <div>
      <p>Child :</p>
      Count : {curr_Count?.count}
      <button onClick={() => curr_Count.ChangeCount()}>++</button>
    </div>
  );
};

const AnotherChild = () => {
  const curr_Count = useContext(CounterContext);

  return <div>AnotherChild :{curr_Count.count}</div>;
};

export default GrandParent;
