import { useState } from "react";
import { Fragment } from "react";

const Test = (props) => {
  let testArray = [];
  testArray.length = props.length;
  testArray.fill(0);

  const [appState, setAppState] = useState({
    started: true,
    inProcess: false,
    completed: false,
  });
  console.log("test", testArray);
  return (
    <div style={{ display: "flex" }}>
      {testArray?.map((i, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
            }}
          >
            <button
              onClick={() =>
                setAppState((p) => {
                  return { ...p, started: false, inProcess: true };
                })
              }
              style={{ backgroundColor: "red" }}
            >
              {" "}
              {index}{" "}
            </button>
            <p> -----></p>
          </div>
        );
      })}
    </div>
  );
};

export default Test;
