export default function resolveClassTitle(currentYear: number) {
  const startYear = 2012;

  const classYear = currentYear - startYear

  if (classYear >= 10) {
    return `EM${classYear-9}A`;
  }

  return `AF${classYear}A`;
}