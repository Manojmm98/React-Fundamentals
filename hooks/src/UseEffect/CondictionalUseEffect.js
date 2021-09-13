import React, { useState, useEffect } from "react";

function CondictionalUseEffect() {
  // in hooks the conditional statment is handle by the 2nd parameter inside useeffect
  // it is and depency array the state which we dont want to render we can give inside it
  // if the effect does not deppends on any props then we will pass an empty array as argument 2

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("updating the effect hook");
    document.title = `clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <h1> count is {count} times</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default CondictionalUseEffect;
