export const imcCalculator = (peso, estatura) =>
  (peso / Math.pow(estatura / 100, 2)).toFixed(2);
