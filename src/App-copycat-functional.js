import React, { useState } from "react";
import CopyCat from "./components/copyCat/copyCat-functional";

function App() {
  const [input, setInput] = useState("");
  const [textVisible, setTextVisible] = useState(true);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    setTextVisible(!textVisible);
  }

  return (
    <div>
      <CopyCat
        input={input}
        handleChange={handleChange}
        handleClick={handleClick}
        textVisible={textVisible}
      />
    </div>
  );
}

export default App;
