function disabilityAmount(employee) {
  if (isNotEligibleForDesability(employee)){
    return 0;
  }
  return 1;
}

function isNotEligibleForDesability(employee) {
  return (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  );
}
