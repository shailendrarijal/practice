function Calculate() {
    var height = document.getElementById("h-input").value;
    var weight = document.getElementById("w-input").value;
    var element = document.getElementById("bmi-status");

    var result = parseFloat(weight) / (parseFloat(height) / 100) ** 2;

    if (!isNaN(result)) {
        document.getElementById("bmi-output").innerHTML = result;
        if (result < 18.5) {
            
            element.style.backgroundColor = "red";
            document.getElementById("bmi-status").innerHTML = "Underweight";
        }
        else if (result < 25) {
            element.style.backgroundColor = "green";
            document.getElementById("bmi-status").innerHTML = "Healthy";
        }
        else if (result < 30) {
            element.style.backgroundColor = "red";
            document.getElementById("bmi-status").innerHTML = "Overweight";
        }
        else {
            element.style.backgroundColor = "red";
            document.getElementById("bmi-status").innerHTML = "Obesity";
        }
    }
}