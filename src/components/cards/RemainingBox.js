// RemainingBox.js
import React from 'react';

function TotalBox({ totalBudget }) {
  return (
    <div>
      Remaining: {totalBudget}
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
    return (
      <div>
        Remaining: {totalBudget - spent}/31
      </div>
    );
  }
  
export {RemainingBox, RemainingBoxMonth, TotalBox};