import React, { Fragment, useState } from "react";

export default function Matching() {
  const [obj1, setObj1] = useState(["none"]);
  const [obj2, setObj2] = useState(["none"]);
  const [obj3, setObj3] = useState(["press the button"]);
  let num1 = [];
  let num2 = [];

  const handleClick = () => {
    for (let i = 1; i <= 8; i += 1) {
      num1.push(Math.floor(Math.random() * 10) + 1);
    }
    setObj1(String(num1));

    for (let j = 1; j <= 8; j += 1) {
      num2.push(Math.floor(Math.random() * 10) + 1);
    }
    setObj2(String(num2));

    handleCheck();
  };

  const handleCheck = () => {
    let res = 0;
    for (let k = 0; k < 8; k += 1) {
      if (num1[k] === num2[k]) {
        res += 1;
        console.log(num1[k], num2[k]);
      }
    }
    setObj3(res);
  };

  return (
    <Fragment>
      <p>1 ➡️ {obj1}</p>
      <p>2 ➡️ {obj2}</p>
      <button onClick={handleClick}>start</button>
      <p>결과 : {obj3}</p>
    </Fragment>
  );
}
