function bmi(w,h){
    const BMI=w/(h*h);
    console.log("your BMI is: "+BMI);
}
const height=prompt("what is your height");
const weight=prompt("what is your weight");

bmi(weight,height)