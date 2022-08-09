import { useState } from "react";

const StepFour = () => {
  const [four, setFour] = useState("");
  const handleonClick = (e) => {
    setFour(e.target.value);
  };
  return (
    <>
      This is Step 4 input
      <br />
      <input placeholeder="StepFour" value={four} onClick={handleonClick} />
      <br />
      <button>Previous</button>
      <br />
      <button>Next</button>
    </>
  );
};

export default StepFour;
