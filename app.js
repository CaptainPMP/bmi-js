var Height;
var Weight;
var BMI;
var trueHeight;
function CalculateBMI(){
    Height = prompt("กรอกค่าความสูง (หน่วยเซนติเมตร)");
    Weight = prompt("กรอกน้ำหนักของคุณ (หน่วยกิโลกรัม)");
    trueHeight = Height / 100;
    BMI = Weight / (trueHeight ** 2);
    if(BMI > 30){
        document.getElementById("showBMI").innerHTML = "ค่า BMI ของคุณคือ " + BMI.toFixed(2);
        document.getElementById("BMIValue").innerHTML = "คุณอยู่ในเกณฑ์โรคอ้วนระดับที่ 2";
    }
    else if(BMI > 25){
        document.getElementById("showBMI").innerHTML = "ค่า BMI ของคุณคือ " + BMI.toFixed(2);
        document.getElementById("BMIValue").innerHTML = "คุณอยู่ในเกณฑ์โรคอ้วนระดับที่ 1";
    }
    else if(BMI > 23){
        document.getElementById("showBMI").innerHTML = "ค่า BMI ของคุณคือ " + BMI.toFixed(2);
        document.getElementById("BMIValue").innerHTML = "คุณอยู่ในเกณฑ์น้ำหนักเกิน";
    }
    else if(BMI >= 18.5){
        document.getElementById("showBMI").innerHTML = "ค่า BMI ของคุณคือ " + BMI.toFixed(2);
        document.getElementById("BMIValue").innerHTML = "คุณอยู่ในเกณฑ์ปกติ";
    }
    else if(BMI > 0){
        document.getElementById("showBMI").innerHTML = "ค่า BMI ของคุณคือ " + BMI.toFixed(2);
        document.getElementById("BMIValue").innerHTML = "คุณอยู่ในเกณฑ์น้ำหนักน้อย";
    }
    else if(BMI <= 0){
        document.getElementById("showBMI").innerHTML = "ค่า BMI ของคุณคือ " + BMI.toFixed(2);
        document.getElementById("BMIValue").innerHTML = "เกิดข้อผิดพลาด ค่าที่ได้มีค่าติดลบ";
    }
    else if(isNaN(BMI)){
        document.getElementById("BMIValue").innerHTML = "เกิดข้อผิดพลาด";
    }
    console.log(Height);
    console.log(Weight);
    console.log(BMI);
}