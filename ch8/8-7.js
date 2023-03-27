export function reportYoungestAgeAndTotalSalary(people) {
  const yougestAge = () => Math.min(...people.map((p) => p.age));
  const totalSalary = () => people.reduce((total, p) => total += p, 0);

  return `youngestAge: ${yougestAge()}, totalSalary: ${totalSalary()}`;
}
