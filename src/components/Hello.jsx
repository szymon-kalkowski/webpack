import React from "react";

export default function Hello() {
  const [visible, setVisible] = React.useState(true);
  return (
    <div>
      <button onClick={() => setVisible((prev) => !prev)}>
        {visible ? "Hide" : "Show"}
      </button>
      {visible && <h3>Hello</h3>}
    </div>
  );
}
