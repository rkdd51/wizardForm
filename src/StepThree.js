import { useState } from "react";

const StepThree = () => {
  const [three, setThree] = useState("");
  const handleonClick = (e) => {
    setThree(e.target.value);
  };
  return (
    <>
      This is Step 3 input
      <br />
      <input placeholeder="StepThree" value={three} onClick={handleonClick} />
      <br />
      <button>Previous</button>
      <br />
      <button>Next</button>
    </>
  );
};

export default StepThree;
