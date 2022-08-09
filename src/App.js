import "./styles.css";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
export default function App() {
  function Steps(props) {
    switch (props.value) {
      case 1:
        return (
          <div>
            <StepOne />
          </div>
        );
      case 2:
        return (
          <div>
            <StepTwo />
          </div>
        );
      case 3:
        return (
          <div>
            <StepThree />
          </div>
        );
      case 4:
        return (
          <div>
            <StepFour />
          </div>
        );
      default:
        return (
          <div>
            <StepOne />
          </div>
        );
    }
  }
  return (
    <div>
      <Steps value={3} />
    </div>
  );
}
