//https://www.codewars.com/kata/55f810474dc34c5a25000016/train/javascript
// calculate the BMI including converting from centimeters to meters.
// output the BMI to 1 decimal place and include the category that BMI falls into
// the DATA is given to us from the start

const DATA = [
  //  from,  to,       category
  [0, 15, "Very severely underweight"],
  [15, 16, "Severely underweight"],
  [16, 18.5, "Underweight"],
  [18.5, 25, "Normal (healthy weight)"],
  [25, 30, "Overweight"],
  [30, 35, "Obese Class I (Moderately obese)"],
  [35, 40, "Obese Class II (Severely obese)"],
  [40, 45, "Obese Class III (Very severely obese)"],
  [45, 50, "Obese Class IV (Morbidly obese)"],
  [50, 60, "Obese Class V (Super obese)"],
  [60, Infinity, "Obese Class VI (Hyper obese)"],
];


function calculateBmi(weight, height) {
  let heightInMeters = height / 100
  let bmi = weight / (heightInMeters * heightInMeters)

  for (weightCategory of DATA) {
    let max = weightCategory[1]
    let message = weightCategory[2]
    if (bmi < max) return { value: bmi.toFixed(1), category: message }
  }
}

calculateBmi(65, 175)
//answer - {value: "21.2", category: "Normal (healthy weight)"}
