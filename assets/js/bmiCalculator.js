const calculateMetricBMI = (weight, height) => {
  let result
  result = (weight / ((height / 100) * (height / 100))).toFixed(2)

  return result
}


const getBMIClassification = (value) => {
  if (value < 18.5) {
    return "Underweight"
  } else if (value < 25) {
    return "Normal weight"
  } else if (value < 30) {
    return "Overweight"
  } else if (value < 35) {
    return "Obesity class 1"
  } else if (value < 40.1) {
    return "Obesity class 2"
  } else {
    return "Extreme Obesity class 3"
  }
}