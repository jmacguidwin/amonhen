// BudgetBox.js
import React, { useState } from 'react';

function BudgetBox({ setTotalBudget }) {
  const [inputValue, setInputValue] = useState(0);

  const handleSubmit = () => {
    setTotalBudget(inputValue);
  };

  return (
    <div>
      <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleSubmit}>Set Budget</button>
    </div>
  );
}

export default BudgetBox;