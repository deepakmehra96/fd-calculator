import React from 'react';
import { useFDStore } from '../store';

const FDForm = () => {
  const { fdDetails, setFDDetails, calculateFD, setResult } = useFDStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target  as HTMLInputElement;
    setResult(null)
    
    if (type === 'checkbox') {
      setFDDetails({
        ...fdDetails,
        [name]: checked,
      });
    } else {
      setFDDetails({
        ...fdDetails,
        [name]: type === 'number' ? parseFloat(value) : value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateFD();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Principal Amount:</label>
        <input
          type="number"
          required
          min={5000}
          max={10000000}
          name="principal"
          value={fdDetails.principal}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Interest Rate (%):</label>
        <input
          type="number"
          required
          min={1}
          max={15}
          step="0.01"
          name="interestRate"
          value={fdDetails.interestRate}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Years:</label>
        <input
          type="number"
          required
          min={1}
          max={25}
          step="0.01"
          name="years"
          value={fdDetails.years}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Compounding Frequency:</label>
        <select
          name="compoundingFrequency"
          value={fdDetails.compoundingFrequency}
          onChange={handleChange}
        >
          <option value="yearly">Yearly</option>
          <option value="half-yearly">Half-Yearly</option>
          <option value="quarterly">Quarterly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <button type="submit">Calculate FD</button>
    </form>
  );
};

export default FDForm;
