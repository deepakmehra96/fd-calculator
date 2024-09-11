import { useFDStore } from '../store';

const FDResult = () => {
  const { result, fdDetails } = useFDStore();

  if (!result) {
    return (
      <div className="result-container">
        <h3>FD Calculation Instructions</h3>
        <p>Please enter the details of your Fixed Deposit and select the compounding frequency from the dropdown menu.</p>
        <p>Click the "Calculate FD" button to see your results</p>
      </div>
    );
  }

  return (
    <div className="result-container">
      <h3>FD Calculation Result</h3>
      <p className='principal'><strong>Invested Amount:</strong> {fdDetails.principal.toFixed(2)}</p>
      <p className='intrest'><strong>Interest Gained:</strong> {result.totalInterest.toFixed(2)}</p>
      <p className='total'><strong>Total Amount:</strong> {result.totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default FDResult;
