// RemainingBox.js
import React from 'react';
import { getRemainingDays } from '../functions/remainingDays';

function TotalBox({ totalBudget }) {
  return (
    <div>
      Starting Value: {totalBudget}
    </div>
  );
}
function RemainingBox({ totalBudget, spent }) {
  return (
    <div>
      Remaining: {totalBudget - spent}
    </div>
  );
}

function RemainingBoxMonth({ totalBudget, spent }) {

  const remainingDays = getRemainingDays();

    return (
      <div>
        Remaining per Day: {(totalBudget - spent)/ remainingDays} remainingDays: {remainingDays}  
      </div>
    );
  }
  
export {RemainingBox, RemainingBoxMonth, TotalBox};