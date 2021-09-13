import React, { useState, useEffect } from "react";

function EffectWithdep3() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {

    // we are incresing the count value by 1 at every seconds  if we will pass empty dependency array 
    //then the count will increase by 1 only  because the effect will not look at any changes occur in the state after the intial render

    // we can increase the count value by 1 at every seconds if we will pass the count value as dependecy array 
    
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <div>{count}</div>;
}

export default EffectWithdep3;
