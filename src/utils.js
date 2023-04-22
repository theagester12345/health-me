const bmiIndices = [
  {
    firebaseKey: 'under_weight',
    minValue: 0,
    maxValue: 18.5,
    label: 'Underweight',
    color: 'yellow',
  },
  { firebaseKey: 'normal', minValue: 18.5, maxValue: 24.9, label: 'Normal', color: 'green' },
  { firebaseKey: 'overweight', minValue: 25, maxValue: 29.9, label: 'Overweight', color: 'orange' },
  {
    firebaseKey: 'obesity',
    minValue: 30,
    maxValue: 39.9,
    label: 'Obese Class I and II',
    color: 'red',
  },
];

export function fetchBmiKey(bmi) {
  const obesityIndex = bmiIndices.find((bmiIndex) => bmiIndex.firebaseKey === 'obesity');
  if (bmi > obesityIndex.maxValue) {
    return obesityIndex;
  }
  return bmiIndices.find((bmiIndex) => bmi >= bmiIndex.minValue && bmi <= bmiIndex.maxValue);
}


export function calculateBmi(heightCm, weightKg) {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  return bmi.toFixed(2);
}
