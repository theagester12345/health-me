// This code defines an array of objects to represent BMI indices with firebase keys, min and max values, labels, and colors.
const bmiIndices = [
  {
    firebaseKey: "under_weight",
    minValue: 0,
    maxValue: 18.5,
    label: "Underweight",
    color: "yellow",
  },
  {
    firebaseKey: "normal",
    minValue: 18.5,
    maxValue: 24.9,
    label: "Normal",
    color: "green",
  },
  {
    firebaseKey: "overweight",
    minValue: 25,
    maxValue: 29.9,
    label: "Overweight",
    color: "orange",
  },
  {
    firebaseKey: "obesity",
    minValue: 30,
    maxValue: 39.9,
    label: "Obese Class I and II",
    color: "red",
  },
];

// This function takes a BMI value and returns the corresponding BMI index object from the array.
export function fetchBmiKey(bmi) {
  const obesityIndex = bmiIndices.find(
    (bmiIndex) => bmiIndex.firebaseKey === "obesity"
  );
  if (bmi > obesityIndex.maxValue) {
    return obesityIndex;
  }
  return bmiIndices.find(
    (bmiIndex) => bmi >= bmiIndex.minValue && bmi <= bmiIndex.maxValue
  );
}

// This function takes height in centimeters and weight in kilograms and returns the calculated BMI value rounded to two decimal places.
export function calculateBmi(heightCm, weightKg) {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  return bmi.toFixed(2);
}
