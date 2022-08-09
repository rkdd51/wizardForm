import { useState } from "react";

const StepTwo = () => {
  const [two, setTwo] = useState("");
  const handleonClick = (e) => {
    setTwo(e.target.value);
  };
  return (
    <>
      This is Step 2 input
      <br />
      <input placeholeder="StepTwo" value={two} onClick={handleonClick} />
      <br />
      <button>Previous</button>
      <br />
      <button>Next</button>
    </>
  );
};

export default StepTwo;
