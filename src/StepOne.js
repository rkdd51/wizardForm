import { useState } from "react";

const StepOne = () => {
  const [one, setOne] = useState("");
  const handleonClick = (e) => {
    setOne(e.target.value);
  };

  const NextButton = () => {
    console.log(one);
  };
  return (
    <>
      This is Step 1 input
      <br />
      <input placeholeder="StepOne" onClick={handleonClick} />
      <br />
      <button>Previous</button>
      <br />
      <button onClick={NextButton}>Next</button>
    </>
  );
};

export default StepOne;
